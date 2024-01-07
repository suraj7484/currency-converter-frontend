const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = (env) => {
    const envPath = '.env';

    return {
        entry: './src/index.tsx',
        output: {
            filename: `[name].[contenthash]-${Date.now()}.js`,
            path: path.resolve(__dirname, 'build'),
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                    exclude: /node_modules/,
                },
            ],
        },
        devServer: {
            port: 3000,
            open: true,
            historyApiFallback: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                minify: true,
                filename: (entryName) => 'index.html'
            }),
            new Dotenv({
                path: path.resolve(__dirname, envPath) // Path to .env file (this is the default)
            }),
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                  configFile: path.resolve(__dirname, 'tsconfig.json'),
                },
              }),
        ]
    }
};
