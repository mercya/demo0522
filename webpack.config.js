/**
 * Created by eCRF on 2018/5/8.
 */
'use strict'
var debug= process.env.NODE_ENV!=='production';
var webpack=require('webpack');
var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './src/index.js')],
    output: {
        path: path.resolve(__dirname,'./build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            //图片的loader
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            //字体的loader
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({ __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false')) }),
        //html模板
        new HtmlWebpackPlugin({
            template:'index.html',
            title:'Title',
        }),
    ]

};
