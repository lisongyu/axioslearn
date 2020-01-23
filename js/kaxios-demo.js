import kxios from './Kxios/';


kxios.interceptors.request.use(function (config) {
  console.log(1)

  return config
}, function () {
  console.log('err', 1)
})

kxios.get('/', {
  baseURL: "http://localhost:8888",
  headers: 
    {
      'kkb':'123'
    }
 
})
  .then(res => {
  console.log('kxios-res',res)
})