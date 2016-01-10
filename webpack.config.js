var path = require('path');
module.exports = {
	entry: './app/app.js',
	output: {
		path: __dirname,
		filename: 'build/bundle.js'
	},
	module: {
		loaders: [
			{ test: /(\.es6$|\.js$)/,
			loader: 'babel',
			exclude: /(node_modules|bower_componets)/,
			query: {
				presets: ['es2015']
			}
			}
		]
	},
	target: 'node'
}