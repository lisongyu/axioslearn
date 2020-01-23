import axios from 'axios';


axios.interceptors.request.use(function (config) {
  console.log(1)

  return config
}, function () {
  console.log('err', 1)
})

axios.interceptors.response.use(function (config) {
  console.log(2)
  return config
}, function () {
  console.log('err', 2)
})
axios.get('http://localhost:8888/')
  .then(res => {
    console.log('axios-res', res)
  })