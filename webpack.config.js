const path = require('path');

module.exports = {
    entry: ['babel-polyfill', path.join(__dirname, 'src', 'client', 'app.js')],
    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.scss?$/,
            loader: 'style-loader!css-loader!sass-loader'
        }
        ]
    }
}
