var gulp                = require('gulp'),
    sass                = require('gulp-sass'),
    autoprefixer        = require('gulp-autoprefixer'),
    sourcemaps          = require('gulp-sourcemaps'),
    input               = 'scss/**/*.scss',
    output              = 'styles',
    autoprefixerOptions = {
        browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    };

gulp.task('sass', function() {
    gulp.src(input)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('../styles/maps'))
        .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
    return gulp
        .watch(input, ['sass'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('prod', function() {
    return gulp
        .src(input)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(output));
});

gulp.task('default', ['sass', 'watch']);