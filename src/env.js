let baseURL;
// 获取当前nodejs进程里面的一些环境变量,写入nodejs里面,这个项目就是在nodejs里面运行的
// 代理
switch(process.env.NODE_ENV){
    case 'dev': 
        baseURL = 'http://dev-mall'
        break;
    case 'test': 
        baseURL = 'http://dev-mall'
        break;
    case 'prod': 
        baseURL = 'http://dev-mall'
        break;
    default: break;
}

export default {
    baseURL
}