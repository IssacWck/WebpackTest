/**
 * Created by WangCK on 2016/11/22.
 */
var path = require('path');
var framework = (['avalon', 'vue', 'react'])[0];

module.exports = {
	devtools: 'eval-source-map',
	entry: {
		index: path.join(__dirname, '/lib/' + framework + '/index.js')
	},
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				exclude: /react/,
				loader: 'html'
			},
			{
				test: /\.css$/,
				loader: 'style!css?modules!postcss'
			},
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				exclude: /node_module|avalon/,
				loader: 'babel'
			}
		]
	},
	resolve: {
		extensions: ['.js', '', '.css', '.vue'],
		alias: {
			'jQuery': __dirname + '/assets/jQuery.js',
			'avalon': __dirname + '/assets/avalon.js',
			'Controller': __dirname + '/lib/' + framework + '/controller.js',
			'vue': 'vue/dist/vue.js'
		}
	}
};