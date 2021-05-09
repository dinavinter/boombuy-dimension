const production = process.env.NODE_ENV === 'production'
const  assetPrefix= production ? '/boombuy-dimension' : '';

module.exports = {
    output: {
        publicPath: assetPrefix,
    }
}