const path = require('path');

module.exports = {
    entry : {
        app:  './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            //a regex that looks at all Javascrpit files
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    },
}