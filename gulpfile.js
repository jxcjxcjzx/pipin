var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('test', function () {
  exec('node index.js -m rpi2', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});