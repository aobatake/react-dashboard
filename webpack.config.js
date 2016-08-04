var path = require('path');
var webpack =require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            { 
                test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/, 
                loader: 'url?limit=10000' 
            },
            { 
                test: /\.(ttf|eot)$/, 
                loader: 'file' 
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js',
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
