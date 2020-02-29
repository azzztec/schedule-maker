const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'sass-loader',
                  ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({ template: "./src/index.html" }),
        new MiniCssExtractPlugin({ filename: 'style.css' })
    
    ]
};