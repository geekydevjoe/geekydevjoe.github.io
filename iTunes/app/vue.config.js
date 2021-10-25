// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    // options...
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    outputDir: "output",
    filenameHashing: false,
    devServer: {
        proxy: 'https://geekydevjoe.github.io/',
    }
}
