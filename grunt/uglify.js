module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'dev/js',
            src: ['*.js', '**/*.js'],
            dest: 'src/js/',
            ext: '.min.js'
        }]
    }
};