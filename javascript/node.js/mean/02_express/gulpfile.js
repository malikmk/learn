var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
	nodemon({
		script: 'server.js',
		ext: 'js',
		env: {
			PORT: 5035,
			NODE_ENV: 'development'
			//NODE_ENV: 'production'
		},
		ignore: [
			'./node_modules/**', 
			'gulpfile.js' // this is ignored because gulp has to be restarted each time gulpfile is changed
		]
	})
	.on('restart', function() {
		console.log('Restarting...');
	})
});
