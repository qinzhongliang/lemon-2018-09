
const path=require("path")
const {VueLoaderPlugin} =require("vue-loader")
const HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
    entry:{
        app:"./src/main.js",
    },
    output:{
        library:"test",
        path:path.resolve("dist"),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:"vue-loader"
            },{
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },{
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },{
                test:/\.png/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            publicPath:"dist/"
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        contentBase:path.resolve(),
        port:7070,
        host:"127.0.0.1",
        open:true
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:path.resolve("index.html")//模板地址
        })
    ],
    mode:"development",
}