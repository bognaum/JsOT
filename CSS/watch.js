import path$     from "path";
import nodemon$  from "nodemon";
import url$  from "url";

import {fileURLToPath}  from "url";
const 
	__filename = fileURLToPath(import.meta.url),
	__dirname  = path$.dirname(__filename);

nodemon$({
	script: path$.resolve(__dirname, 'compile.js'),
	ext: 'scss'
});

nodemon$.on('start', function () {
	console.log('\n -', getTime(), '\n    Started:', __dirname, ' \n');
}).on('quit', function () {
	console.log('\n -', getTime(), '\n    Quit:', __dirname, ' \n');
	process.exit();
}).on('restart', function (files) {
	console.log('\n -', getTime(), '\n    Restarted due to: ', files, '\n');
});

function getTime() {
	return (new Date()).toTimeString();
}