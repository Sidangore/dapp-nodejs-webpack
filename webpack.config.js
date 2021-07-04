const path = require('path');
const cleanwebpackplugin = require('clean-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    target: 'node',
    plugins: [
        new cleanwebpackplugin.CleanWebpackPlugin(),
    ]
};