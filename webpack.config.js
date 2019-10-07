const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./res/'),
        filename: 'main.js',
        publicPath: 'res/'
    },
    devServer:{
        overlay: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'style.css',
          chunkFilename: 'chunk.css',
          ignoreOrder: false,
        }),
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.scss$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"sass-loader"
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        publicPath:'./images',
                        outputPath: 'images'
                      }
                    }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]',
                          publicPath:'./fonts',
                          outputPath: 'fonts'
                        }
                    }
                ],
            },
        ]
    },
}

module.exports = (env, options) => {
    let production = options.mode === 'production'
    conf.devtool = production?false:'eval-sourcemap'
    return conf
}