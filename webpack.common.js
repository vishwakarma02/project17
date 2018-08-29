const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //to build html files

module.exports = {
    entry: {
        //add all entry points here
        //for separate module
        main: './src/js/app.js', //module 1
        module: './src/js/module.js' //module 2
        // . . . can add more module on above pattern
    },
    output: {
        filename: '[name].bundle.js', //each entry point compiled into file with extension of '.bundle.js'
        path: path.resolve(__dirname, 'dist') //path of compiled files
    },plugins: [
        //to build html files
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src', 'index.html'),
            minify: {
                //can add more options
                //options are listed here: https://github.com/kangax/html-minifier#options-quick-reference
                html5: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                preserveLineBreaks: true,
                removeScriptTypeAttributes: true,
                removeComments: true
            },
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: path.join(__dirname, 'src', 'contact.html'),
            minify: {
                //can add more options
                //options are listed here: https://github.com/kangax/html-minifier#options-quick-reference
                html5: true
            },
            chunks: ['module']
        }),
        //add other html files with same options and specific chunks HERE
    ],
}