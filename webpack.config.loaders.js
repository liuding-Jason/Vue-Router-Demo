
module.exports = [
    {
        test: /\.vue$/,
        loader: 'vue'
    },
    {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
    },
    {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
        	name: '[name].[ext]?[hash]'
        }
    }
]