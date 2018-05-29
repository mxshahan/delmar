const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const SRC = path.resolve(__dirname, 'src');
const PUBLIC = path.resolve(__dirname, 'public');

module.exports = {
    entry: SRC + '/client/App.js',
    output: {
        path: `${__dirname}/dist/client`,
        filename: 'bundle.js',
        publicPath: '/'
    },
    target: 'node',
    externals: nodeExternals(),
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
            query: {compact: false} 
        }, {
            test: /\.(scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': `'production'`
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'production',    
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
}
