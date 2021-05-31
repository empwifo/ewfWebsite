const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
require('dotenv').config()

module.exports = {
    entry: "./src/_bundle/main.js",
    mode: process.env.NODE_ENV,
    module: {
        rules: [{
                test: /\.pcss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: false, // webpack@1.x
                      disable: false, // webpack@2.x and newer
                    },
                  },
                ],
            }
        ]
    },
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist", "assets"),
        publicPath: path.resolve(__dirname, "dist", "assets"),
        filename: "main.bundle.js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.bundle.css"
        })
    ]
};