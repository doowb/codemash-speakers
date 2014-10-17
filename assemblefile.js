
var assemble = require('assemble');
var ghpages = require('gulp-gh-pages');

var deployOptions = {}

assemble.task('build', function () {
  return assemble.src('./api/examples/*.html')
    .pipe(assemble.dest('_gh_pages'));
});

assemble.task('deploy', function () {
  return assemble.src('./_gh_pages/**/*')
    .pipe(ghpages(deployOptions));
});


assemble.task('default', ['build']);