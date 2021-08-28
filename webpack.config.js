module.exports={
    entry: ['babel-polyfill', './test.js'],

  output: {
    filename: 'bundle.js'       
  },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
                
            },
            { test: /\.m?js/, type: "javascript/auto" },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: 'html' 
            },
            {
                test: /\.(png|jpg|JPG)$/,
                loader: 'url-loader'
            },{
            test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],}

        ]
    },
    // loader: [
    //   ],
    performance:{
        hints:false
    }
}