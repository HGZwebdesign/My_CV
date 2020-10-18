const {concurrent, getBin} = require('nps-utils')
const serverPath = 'src/server/index.js'

let jestBin
try {
	jestBin = getBin('jest-cli', 'jest')
} catch {
	jestBin = 'pleaseInstallJest'
}

module.exports = {
	scripts: {
		start: {
			default: concurrent.nps('build', 'prod'),
			inspect: concurrent.nps('build', 'prod.inspect'),
		},
		prod: {
			default: `node ${serverPath}`,
			inspect: `node --inspect ${serverPath}`,
		},
		dev: concurrent.nps('server', 'client'),
		build: `webpack --mode production`,
		client: `webpack-dev-server --mode development --devtool inline-source-map --hot`,
		server: `nodemon --inspect ${serverPath}`,
		test: {
			default: concurrent.nps('test.lint', 'test.full'),
			watch: `jest --color --watch`,
			full: 'jest --coverage --color',
			lint: `eslint {src,plugins}/**/*.js{,x}`,
			inspect: {
				default: `node --inspect ${jestBin} --runInBand --watch`,
				verbose: `DEBUG=*,-babel* node --inspect ${jestBin} --runInBand --watch`,
			},
		},
	},
}
