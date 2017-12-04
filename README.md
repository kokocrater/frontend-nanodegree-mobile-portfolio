# Website Optimization Project

## Modifications
### index.html
- Resized and compressed 'img/profilepic.jpg' and 'img/pizzeria.jpg'.
- Applied 'async' to script tag which links to a minified .js file.
- Applied minified css, inline, to the top 'style' tag.
- Applied 'media="print"' to the link to the print-specific css file.

### views/js/main.js
- For 'changePizzaSizes()' and 'updatePositions()', moved all variable declarations and most calculations out of the 'for' loops.  
- Established 'items' and 'leftPosArray' has global variables so that they could be updated at the initial page load instead of each time 'updatePositions()' is called.  
- The array 'leftPosArray' is a list of all the initial 'elem.basicLeft' values.

## Using Grunt during development
*Currently the Gruntfile is configured to affect only the css and js files in the 'views' folder.*
* There are four different tasks in the Gruntfile:
	1. grunt-contrib-concat	
		- Concatenates 'views/css/style.css' and 'views/css/bootstrap-grid.css' into a single file, 'views/css/styles-concat.css'.

	2. grunt-contrib-cssmin
		- Minifies the concatenated css file and saves it as 'views/dist/styles.min.css'.

	3. grunt-contrib-uglify
		- Minifies 'views/js/main.js' and saves it as 'views/dist/script.min.js'.

	4. grunt-contrib-watch
		- Monitors 'views/js/main.js' and 'views/css/style.css' for saves, then runs the other tasks.

* Running 'grunt' from the command line will run the watch task which continuously monitors primary script and style files.  When either file is saved the 'watch' task will then run the 'concat', uglify' and 'cssmin' tasks.  This makes sure the 'dist' files are always current.
*Gruntfile modeled after [this youtube demo](https://www.youtube.com/watch?v=TMKj0BxzVgw&t=14s).*

This project is hosted on [github.io](https://kokocrater.github.io/frontend-nanodegree-mobile-portfolio/).

