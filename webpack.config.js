/**
 * Created by WangCK on 2016/11/14.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var framework = (['avalon', 'vue', 'react'])[1];

module.exports = {
    devtools: 'eval-source-map',
	entry: path.resolve(__dirname, 'lib/' + framework),
	//entry: {
	//	index: path.resolve(__dirname, 'lib/' + framework + '/index.js')
	//},
    output: {
	    path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
	    // 本地服务器所加载的页面所在的目录
	    contentBase: path.resolve(__dirname, 'dist'),
	    // 终端中输出结果为彩色
	    colors: true,
	    // 不跳转
        historyApiFallback: true,
	    // 实时刷新
        inline: true,
        hot: true,
	    progress: true
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
                loader: 'style!css?modules!postcss'
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
		extensions: ['.js', '', '.css', '.vue'],
		alias: {
			'jQuery': path.resolve(__dirname, 'assets/jQuery.js'),
			'avalon': path.resolve(__dirname, 'assets/avalon.js'),
			'Controller': path.resolve(__dirname, 'lib/' + framework + '/controller.js'),
			'vue': 'vue/dist/vue.js',
			'app.css': path.resolve(__dirname, 'assets/app.css'),
		}
	},
	plugins: [
	    new webpack.BannerPlugin("Copyright By WangCK"),
		new HtmlWebpackPlugin({
			template: __dirname + '/lib/template.html'
		})
	]
};
>>>>>>> b581685dc70a9bd5f67451dbd70df6b80fde827c
