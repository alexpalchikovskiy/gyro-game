const gulp = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');

const path = {
    pug: 'src/index.pug',
    public: 'public/',
    publicAll: 'public/*'
}

function buildHTML(){ 
    return gulp
        .src( path.pug )
        .pipe( pug({}) )
        .pipe( gulp.dest('public/') );
}

function serve(){

    gulp.series( buildHTML );

    gulp.watch( path.pug, buildHTML );

    browserSync.init({
        server: {
            baseDir: path.public
        }
    });

    gulp.watch( path.publicAll ).on('change', browserSync.reload);
        
}

exports.html = buildHTML;
exports.serve = serve;
