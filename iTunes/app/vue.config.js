// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    // options...
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    outputDir: "output",
    filenameHashing: false,
    configureWebpack: {
        output: {
            filename: 'js/[name].js',
            chunkFilename: 'js/[name].js'
        }
    }
}
