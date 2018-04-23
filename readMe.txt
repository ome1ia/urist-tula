Структура каталогов:
====================
/dev - файлы разработки (img, js, sass (стили в SASS))
/src - файлы для продакшн
в корневой директории html-файлы главное (index.html) и вторичной (second.html) страниц.

CSS
===
Bootstrap не использовала, т.к. Bootstrap4 использует flexbox и IE8 не поддерживается. В начале подгружаю normalize.css (https://necolas.github.io/normalize.css/).
В разработе используется препроцессор sass. Для его запуска нужно установить node.js (https://nodejs.org/en/), на основе которой установить grunt.js (https://gruntjs.com/) с плагинами, которые опишу далее. 
Либо, если хочется внести 1-2 правки в CSS, а с установкой npm и grunt заморачиваться не хочется, можно внести правки в /src/css/style.css, после чего минифицировать его, заменив новым файлом style.min.css. Либо можно не минифицировать, подключив новый файл в <head> в строчке <link rel="stylesheet" href="src/css/style.min.css" type="text/css"  media="all" /> вместо style.min.css. Но тогда потом придется всегда вносить правки таким образом, ибо файлы разработки останутся без изменений.

Установка Grunt.js:
===================
Установка Node.js  описана здесь https://nodejs.org/en/

Установив Node.js, вы получаете менеджер пакетов npm, с помощью которого в командной строке устанавливаете grunt.js (далее описывается для Linux):
- npm install -g grunt-cli (скорее всего нужно будет указать sudo. Устанавливает grunt глобально)

- переходите в папку с сайтом, в которой будете работать и создаете 2 пустых файла:
Первый:
	Gruntfile.js
текст внутри:
	module.exports = function(grunt) {

	    require('time-grunt')(grunt);

	    require('load-grunt-config')(grunt, {
	        jitGrunt: true
	    });
	};
Второй:
	package.json
текст внутри:
	{
	  "name": "urist-tula",
	  "version": "0.0.1",
	  "description": "Urist-tula"
	}

- с помощью npm устанавливаете плагины:
	npm install grunt --save-dev
	npm install time-grunt --save
	npm install load-grunt-config --save-dev
	npm install grunt-concurrent --save-dev
	npm install grunt-contrib-clean --save-dev
	npm install grunt-contrib-imagemin --save-dev
	npm install grunt-sass --save-dev
	npm install grunt-contrib-uglify --save-dev
	npm install grunt-contrib-watch --save-dev
	npm install grunt-contrib-jshint --save-dev
	npm install jshint-stylish

	В итоге Gruntfile.js и package.json станут примерно как у меня.

- все готово к работе: в командной строке вводите grunt watch (если хотите собрать css и js из /dev в /scr) и grunt img (если хотите минифицировать картинки).