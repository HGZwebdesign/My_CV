const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const outputDirectory = 'build'

const LOCAL_PORT = 3000
const SERVER_PORT = 8080

module.exports = {
	entry: ['babel-polyfill', './src/client/index.js'],
	output: {
		path: path.join(__dirname, outputDirectory),
		filename: 'bundle.js',
		// publicPath allows you to specify the base path for all the assets within your application (compile proper path to dynamic index.html file <script src="bundle.js">)
		// publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
				],
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
				loader: 'url-loader?limit=100000',
			},
		],
	},
	devServer: {
		port: LOCAL_PORT,
		proxy: {
			'/api': `http://localhost:${SERVER_PORT}`,
		},
		// historyAPIFallback will redirect 404s to /index.html => fix a problem (works only for local dev-server) with "cannot GET /URL" error on refresh with React Router https://tylermcginnis.com/react-router-cannot-get-url-refresh/, ALTERNATIVE method (hack): HashRouter
		historyApiFallback: true,
		// automatically opens page in browser
		// open: true,
		// hot update not in use here
		// hot: true,
		// refresh app automatically after update
		// inline: true,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'index.html',
			favicon: './assets/images/octogirl.png',
		}),
	],
	resolve: {
		// aliases - compilation paths
		alias: {
			app: path.resolve(__dirname, './src/'),
			plugins: path.resolve(__dirname, './plugins/'),
			data: path.resolve(__dirname, './data/'),
			assets: path.resolve(__dirname, './assets/'),
			// eslint-disable-next-line camelcase
			node_modules: path.resolve(__dirname, './node_modules/'),
			Components: path.resolve(__dirname, './src/client/Components/'),
			Styles: path.resolve(__dirname, './src/client/styles/'),
		},
		// aliases - ignore lack of file extentions in import paths
		extensions: ['.mjs', '.js', '.jsx', '.css', '.scss'],
	},
}
