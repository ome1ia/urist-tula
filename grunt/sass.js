module.exports = {
    // Development settings
    all: {
        options: {
            style: 'nested'
        },
        files: [{
            expand: true,
            cwd: 'dev/sass',
            src: ['**/*.scss', '*.scss'],
            dest: 'src/css',
            ext: '.css'
        }]
    }
};
