const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [['@babel/preset-env', {
                        targets: [
                            'last 2 versions',
                            'not dead',
                            'not < 2%'
                              ],AW
                        useBuiltIns: 'entry',
                    }], '@babel/preset-react'],
                    plugins: [
                        'react-hot-loader/babel',
                        '@babel/plugin-proposal-class-properties'
                    ]   
                }
            },
            {
                // css-loader lets webpack handle css syntax
                // style-loader injects styles into html at runtime
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [new htmlWebpackPlugin({
        template: './src/index.html'
    })]
}