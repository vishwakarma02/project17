let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
    mode: 'production', //options: production / development
    entry: {
        //add all entry points here
        //for separate module
        main: './src/js/app.js', 
    },
    output: {
        filename: '[name].bundle.js', //each entry point compiled into file with extension of '.bundle.js'
        path: path.resolve(__dirname, 'dist') //path of compiled files
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        //to build html files
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src', 'index.html'),
            minify: {
                //can add more options
                //options are listed here: https://github.com/kangax/html-minifier#options-quick-reference
                html5: true
            },
            chunks: ['main']
        }),

        //use to watch any change in src folder
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                files: ['./dist/*html'],
                server: {baseDir: ['dist']}
            },
            {
                relaod: false
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    "style-loader", // create style nodes from JS strings
                    "css-loader", //translate CSS into CommonJS
                    "postcss-loader", //for adding vendor prefixes in CSS
                    "sass-loader", //compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use:[
                    'html-loader'
                ]
            }
        ]
    }

}