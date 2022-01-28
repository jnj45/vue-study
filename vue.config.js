module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch');
    },
    devServer: {
        port: process.env.VUE_APP_LOCAL_DEV_PORT || 8080
        // ,
        // proxy: {
        //     '/':{
        //       "target": "http://localhost:8080",
        //       "pathRewrite":{'^/':''},
        //       "changeOrigin":true,
        //       "secure":false
        //     }
        //   }
    }, 
    publicPath: process.env.BASE_URL
};