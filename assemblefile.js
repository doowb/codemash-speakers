
var assemble = require('assemble');

assemble.task('build', function () {
  return assemble.src('./api/examples/*.html')
    .pipe(assemble.dest('_gh_pages'));
});

assemble.task('deploy', function () {

});


assemble.task('default', ['build']);