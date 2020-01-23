import {
  deepCopy,
  mergeConfig
} from './utils'

import InterceptorManager from './interceptorManager'

class Kxios {
  constructor(config) {
    this.defaults = deepCopy(config);
    this.interceptors = {
      request: new InterceptorManager,
      response:new InterceptorManager
    }
   

  }
  get(url, config) {

    //把get传入的配置与对象默认配置进行整合
  
    let configs = mergeConfig(this.defaults, config)
    configs.url = url;
    let promise = Promise.resolve(configs);
   
    this.interceptors.request.handlers.forEach((handler) => {
      //不能立即执行，起到链式操作的目的
     
      promise=promise.then( handler.resolvedHandler,handler.rejectedHandler)
     
    })

    promise = promise.then(this.dispatch, undefined);

    this.interceptors.response.handlers.forEach((handler) => {
      //不能立即执行，起到链式操作的目的
     
      promise=promise.then( handler.resolvedHandler,handler.rejectedHandler)
     
    })
   
      return promise
  }

  dispatch(configs) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.onload = function () {
        let responseJson = {
          statusCode: xhr.statusCode,
          statusText: xhr.statusText,
          data:xhr.responseText
       }
        resolve(responseJson)

      }
      xhr.open('get', configs.baseURL + configs.url, true);
      xhr.send()

    })
    
  }

}

export default Kxios