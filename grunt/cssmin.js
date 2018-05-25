module.exports = {

	all: {
	  	options: {
            keepSpecialComments: 0
        },
	    files: [{
	      expand: true,
	      cwd: 'src/css',
	      src: ['*.css', '!*.min.css'],
	      dest: 'src/css',
	      ext: '.min.css'
	    }]
	}

}