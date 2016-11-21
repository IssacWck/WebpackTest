/**
 * Created by WangCK on 2016/11/14.
 */
var webpack = require('webpack');
var framework = (['avalon', 'vue', 'react'])[1];

module.exports = {
    devtools: 'eval-source-map',
	entry: {
		index: __dirname + '/app/' + framework + '/index.js'
	},
    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    },
    devServer: {
        contentBase: './public',
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
	        {
	            test: /\.js$/,
	            exclude: /node_module|avalon/,
	            loader: 'babel'
	        },
	        {
	            test: /\.html$/,
		        exclude: /react/,
	            loader: 'html'
	        },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
	resolve: {
		extensions: ['.js', '', '.css', '.vue'],
		alias: {
			'jQuery': __dirname + '/assets/jQuery.js',
			'avalon': __dirname + '/assets/avalon/avalon.js',
			'Controller': __dirname + '/app/' + framework + '/controller.js',
			'vue': 'vue/dist/vue.js'
		}
	}
	//plugins: [
	//    new webpack.BannerPlugin("Copyright By WangCK")
	//    //new webpack.HotModuleReplacementPlugin(),
	//    //new webpack.optimize.OccurenceOrderPlugin(),
	//    //new webpack.optimize.UglifyJsPlugin()
	//    //new ExtractTextPlugin("style.css")
	//	  111
	//	  222
	//	  333
	//	  444
	//],
};
