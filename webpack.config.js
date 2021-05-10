const production = process.env.NODE_ENV === 'production'
const  assetPrefix= production ? '/boombuy-dimension/' : '';

module.exports = {
    output: {
        publicPath: assetPrefix
    },
    pathPrefix: `/boombuy-dimension`, // This path is subpath of your hosting https://domain/portfolio
    baseurl:`/boombuy-dimension`

}