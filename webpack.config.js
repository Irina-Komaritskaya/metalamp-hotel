const path = require("path");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");

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
            // {
            //     test: /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 outputPath: "fonts",
            //                 name: "[name].[ext]",
            //             },
            //         },
            //     ],
            // },
            {
                test: /(\.(png|jpe?g|gif)$|^((?!font).)*\.svg$)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "imgs",
                            name: "[name]-[sha1:hash:7].[ext]",
                        },
                    },
                ],
            },
            { test: /\.svg$/, use: "file-loader" },
        ],
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/pages/kit/form-elements/form-elements.pug",
            filename: "./html/form-elements.html",
        }),
        new MiniCssExtractPlugin({
            filename: "./style.css",
        }),
        new HtmlWebpackPugPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js",
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, "src/fonts"), to: `fonts` },
                //   { from: `${PATHS.src}/favicons`, to: 'favicons' },
                { from: path.resolve(__dirname, "src/imgs"), to: `imgs` },
            ],
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
