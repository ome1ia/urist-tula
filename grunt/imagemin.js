module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'dev/img/',
            src: ['*.{png,jpg,gif}', '**/*.{png,jpg,gif}'],
            dest: 'src/img/'
        }]
    }
};
