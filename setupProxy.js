const proxy = require('http-proxy-middleware')

module.exports = function(app){
	app.use(
		proxy('/api',{ 					// /api1 前缀的请求，就会触发该代理配置
			target:'http://localhost:5000', //请求转发
			changeOrigin:true,				//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/api':''} 		//重写请求
		})
	)
}