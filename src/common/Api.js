
// fetch jquery axios 
// import Axios from "axios"
// export default{
    
//         /**
//      * 获取数据  用 fetch 
//      * @param {*} url 请求地址
//      * @param {*} cb  回调函数
//      */
//         get(url,cb){
//         //    console.log("fetch")
//             fetch(url).then(res=>{
//                 res.json().then(data=>{
//                     cb(data)
//                 })
//             })
//         }
// // get(url,cb){
       
// //     Axios.get(url).then(res=>{
// //         cb(res.data)
// //     })
// //     console.log("axios")
// //  }
    
// }

import Axios from "axios"

/**
 * fetch对象来访问
 * @constructor
 */

const REQUESTMETHODS = {"fetch":"fetch","axios":"axios"}

class FetchApi {

    constructor() {
        this.install = null;
    }


    /**
     * 通过get方式来获取数据
     * @param url
     * @param cb
     */
    get(url,cb){
       console.log("fetch")
        fetch(url).then(res=>{
            res.json().then(data=>{
                cb(data)
            })
        })
    }

    static getInstance(){
        //singlton
        return this.instance || (this.instance = new FetchApi())
    }
}

class WebSocketApi {

    get(url,cb){
       
        
    }
}
/**
 * 通过axios的模块来调用 api
 */
class AxiosApi {

    get(url,cb){
       
       Axios.get(url).then(res=>{
           cb(res.data)
       })
       console.log("axios")
    }
}



function ApiFactory(name) {
   switch (name) {
       case REQUESTMETHODS.axios:
            return  new AxiosApi()
          
       case REQUESTMETHODS.fetch:
            return FetchApi.getInstance();  

       default:
            return new FetchApi()

   }
}

export default ApiFactory(REQUESTMETHODS.fetch)
