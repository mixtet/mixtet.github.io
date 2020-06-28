
/**
 * storage 封装
 */
const STORAGE_KEY = 'mall'
export default{
    // 存储值
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            // 在大的val值里面存值
            val[key] = value;
            this.setItem(module_name,val)
        }else{
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val)) 
        }  
    },
    // 获取值  获取某一块下面的属性user下面的username
    getItem(key, module_name){
        // module_name 名字
        if(module_name){
            // 递归获取
            let val = this.getItem(module_name)
            if(val) return val[key]
        }
        return this.getStorage()[key]
    },
    // 获取整个浏览器的缓存信息
    getStorage(){
        // 所有的读写都是用JSON存储
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    clear(key,module_name){
        let val = this.getStorage();
        if(module_name){
            if(!val[module_name])return;
            delete val[module_name][key]
        }else{
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val)) 
    }
}
