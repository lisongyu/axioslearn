import {
  deepCopy,
  mergeConfig
} from './utils'

// let obj1 = {
//   baseURL: '',
//   url: '',
//   method: 'get',
//   data: {
//     x: 1,
//     y:2
//   },
//   arr:[1,2,3]
// }
// //深拷贝
// let obj2 = deepCopy(obj1);
// obj2.url = 'abc';
// obj2.data.z=10
// console.log(obj1)

class Kxios {
  constructor(config) {
    this.defaults = deepCopy(config);
    this.interceptors = {
      request: {
        use() {
          
        }
      },
      response:{}
    }
   

  }
  get(url, config) {

    //把get传入的配置与对象默认配置进行整合
  
    let configs = mergeConfig(this.defaults, config)
    configs.url=url
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.responseText)

      }
      xhr.open('get', this.defaults.baseURL + this.defaults.url, true);
      xhr.send()

    })

  }

}

export default Kxios