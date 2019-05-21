const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    /* Entry e output */
    // entry: './src/app.jsx',
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'dist')
    // },
    
    /* Loaders */
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            }, {
                test: /\.(woof|woof2|ttf|eot|svg*.*)$/,
                use: ['font-awesome']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};