 const path=require("path")
 
 //importando o htmlPlugin
 const HTMLWebepackPlugin=require("html-webpack-plugin")
 
 module.exports={
    entry:path.resolve(__dirname,"src","js","index.js"),
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist"),
        
    },
    mode:"development",

    //incluindo o html
    plugins:[new HTMLWebepackPlugin()],
 }