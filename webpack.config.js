const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
    entry: "./src/_bundle/main.js",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.pcss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
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
    output:{
        path: path.resolve(__dirname, "dist", "assets"),
        filename: "main.bundle.js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.bundle.css"
        })
    ]
};