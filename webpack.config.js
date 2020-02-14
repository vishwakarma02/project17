const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); //to enable live reload on eny change
const merge = require('webpack-merge'); //to merge webpack.common.js into this config
const common = require('./webpack.common'); //webpack.common.js


module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hot: true  
    },
    plugins: [
        //use to watch any change in src folder
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                files: ['./dist/*html'],
                server: {baseDir: ['dist']}
            },
            {
                relaod: false //let webpack-dev-server handle reloading
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
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/images'
                    }
                }]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [{
                   loader: 'file-loader',
                   options: {
                       outputPath: 'assets/fonts'
                   }
                }]
            },
            {
                //converting ES6 into ES5 to get support from IE also
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
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
})