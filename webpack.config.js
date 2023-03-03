let app = require('path');
let wp = require('webpack')



module.exports = {
    entry: './js/index.js',
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            {test: /\.scss$/, use: 'scss-loader'}
            
        ]
    },
    output: {
        path: app.resolve(__dirname, 'disc'),
        filename: 'index_bundle.js',
    }
}