var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        modules: ['node_modules'],
        descriptionFiles: ['package.json']
    }
}
