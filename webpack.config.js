import webpack from 'webpack';
import path from 'path';


const src_dir = path.resolve(__dirname, 'src/');
const dist_dir = path.resolve(__dirname, 'dist/');

const config = {
	entry: 'index.html',
	output: {
		path: dist_dir,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: src_dir,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
				exclude: 'node_modules/'
			},
			{
				test: /\.scss$/,
				include: src_dir,
				loader: "css-loader!sass-loader"
			}
		]
	},
	plugins: [
		new webpackHotModuleReplacementPlugin()
	],
	devtool: 'source-map',
	devServer: {
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
		contentBase: './'
	}
};

export default config

