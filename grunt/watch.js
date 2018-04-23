module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'dev/js/*.js'
        ],
        tasks: [
//            'jshint',
            'clean:js',
            'uglify'
        ]
    },

    styles: {
        files: [
            'dev/sass/*.scss'
        ],
        tasks: [
            'clean:css',
            'sass:dev',
            'sass:prod'
        ]
    },
};