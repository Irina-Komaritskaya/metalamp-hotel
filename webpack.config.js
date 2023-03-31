const path = require("path");
var HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "./src/index.js"),
    },
    mode: "development",
    devServer: {
        hot: true,
    },
    devServer: {
        watchFiles: ["src/**/*"],
        static: { directory: path.join(__dirname, "./dist/html/") },
        compress: true,
        open: true,
        port: 4000,
        historyApiFallback: {
            index: "form-elements.html",
        },
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // isDev ? miniCss : "style-loader",
            },
            {
                test: /\.css$/,
                use: ["css-loader", MiniCssExtractPlugin.loader],
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: { name: "./[name].[ext]" },
                    },
                ],
            },
            { test: /\.svg$/, use: "file-loader" },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/pages/kit/form-elements/form-elements.pug",
            filename: "./html/form-elements.html",
        }),
        new MiniCssExtractPlugin({
            filename: "./style.css",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPugPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js",
        }),
        // new webpack.ProvidePlugin({
        //     inputmask: "inputmask/dist/jquery.inputmask.js",
        // }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "all",
    //     },
    // },
};
