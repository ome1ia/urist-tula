module.exports = {
    // Development settings
    dev: {
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
    },
    // Production settings
    prod: {
        options: {
            style: 'compressed'
        },
        files: [{
            expand: true,
            cwd: 'dev/sass',
            src: ['**/*.scss', '*.scss'],
            dest: 'src/css',
            ext: '.min.css'
        }]
    }
};
