// entry -> output 
const path = require('path');


module.exports =(env) => {

    const isProduction=env === 'production';

    console.log('env',env);
    return {
            entry:'./src/app.js',
            output: {
                path:path.join(__dirname,'public'),
                filename:'bundle.js'
            },
            module: {
                rules: [{
                    loader: 'babel-loader',
                    test:/\.js$/,
                    exclude: /node_modules/
                },
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
            },
            //finding file in console easily
            devtool:isProduction ? 'source-map':'cheap-module-eval-sorce-map',
            //runing dev server and live server 
            devServer:{
                contentBase:path.join(__dirname,'public'),
                historyApiFallback:true
            }      
    }
}



//loader 

