import kxios from './Kxios/';

console.log(kxios)
kxios.interceptors.request.use(function (config) {
  console.log(1)

  return config
}, function () {
  console.log('err', 1)
})

kxios.interceptors.request.use(function (config) {
  console.log(2)

  return config
}, function () {
  console.log('err', 2)
})


kxios.interceptors.response.use(function (res) {
  console.log(res)
  console.log(3)
  return res
}, function () {
  console.log('err', 3)
})

kxios.interceptors.response.use(function (res) {
  console.log(4)

  return res
}, function () {
  console.log('err', 4)
})

kxios.get('/', {
    baseURL: "http://localhost:8888",
    headers: {
      'kkb': '123'
    }

  })
  .then(res => {
    console.log('kxios-res', res)
  })