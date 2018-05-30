const path = require('path');
const webpack = require('webpack');
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
            'process.env.NODE_ENV': `'development'`
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development',    
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
    }
}
