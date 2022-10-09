const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

const getEntries = require('./entries');

const root = path.join(__dirname, '..');

module.exports = {
    mode: 'production',
    entry: getEntries(path.join(root, 'src'), ''),
    output: {
        path: path.join(root, 'dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs',
    },
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: path.join(root, 'types.d.ts'), to: path.join(root, 'dist', 'types.d.ts')},
            ],
        }),
        new webpack.ProvidePlugin({
            GamevasJSX: path.join(root, 'src', 'GamevasJSX.ts')
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: path.join(root, 'tsconfig.json'),
                },
            },
            {
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.tsx$/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-typescript"],
                }
            }
        ],
    },
}
