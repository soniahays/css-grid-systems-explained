'use strict';

var express = require('express'),
	_ = require('underscore'),
	sassMiddleware = require('node-sass-middleware'),
	app = express(),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler'),
	methodOverride = require('method-override'),
	port = parseInt(process.env.PORT, 10) || 8080,
	publicDir = __dirname + '/public',
	srcPath = publicDir + '/scss',
	destPath = publicDir + '/generated_css/css';

app.get('/', function(req, res) {
	res.redirect('/index.html');
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(sassMiddleware({
	src: srcPath,
	dest: destPath,
	debug: true,
	outputStyle: 'compressed'
}));

app.use(express.static(publicDir));

app.use(errorHandler({
	dumpExceptions: true,
	showStack: true
}));

app.use(app.router);

app.listen(port);

