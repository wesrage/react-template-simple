import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
   entry: ['./src/index'],
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.js',
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: [['env', { modules: false }], 'react', 'stage-1'],
                  env: {
                     development: {
                        presets: ['react-hmre'],
                     },
                  },
               },
            },
         },
         {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: 'css-loader',
            }),
         },
         {
            test: /\.html$/,
            use: {
               loader: 'file-loader',
               options: {
                  name: '[name].[ext]',
               },
            },
         },
         {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'file-loader',
         },
         {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'file-loader',
         },
      ],
   },
   plugins: [
      new ExtractTextPlugin({
         filename: 'bundle.css',
      }),
      new webpack.NoEmitOnErrorsPlugin(),
   ],
   resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx'],
   },
}
