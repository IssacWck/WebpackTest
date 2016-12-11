/**
 * Created by WangCK on 2016/11/24.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var framework = (['avalon', 'vue', 'react', 'react/Flux', 'react/Redux'])[3];

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'lib/' + framework + '/index')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]-[hash].js'
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: "json"
			},
			{
				test: /\.js[x]?$/,
				exclude: /node_modules|avalon/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css?modules!postcss'
			},
			{
				test: /\.html/,
				include: /avalon/,
				loader: 'html'
			},
			{
				test: /\.vue$/,
				loader: 'vue'
			}
		]
	},
	postcss: [
		require('autoprefixer')
	],
	resolve: {
		extensions: ['.js', '', '.css', '.vue', '.jsx'],
		alias: {
			jQuery: path.resolve(__dirname, 'assets/jQuery.js'),
			avalon: path.resolve(__dirname, 'assets/avalon.js'),
			Controller: path.resolve(__dirname, 'lib/' + framework + '/controller.js'),
			vue: 'vue/dist/vue.js'
		}
	},
	plugins: [
		new webpack.BannerPlugin("Copyright By WangCK"),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'lib/template.html')
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		//new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin('[name].css'),
		new webpack.optimize.CommonsChunkPlugin('common.js'),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	]
}