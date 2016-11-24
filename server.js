/**
 * Created by WangCK on 2016/11/22.
 */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpacConfig = require('./webpackConfig.js');

var app = express();
var compiler = webpack(webpacConfig);

app.use(express.static(__dirname + '/dist'));
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.get('*', function response (req, res) {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000);