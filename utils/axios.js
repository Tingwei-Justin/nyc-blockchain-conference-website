import axios from 'axios'

let baseURL = location.protocol + '//' + location.hostname

// if(process.env.NODE_ENV === 'production' ) {
//   baseURL = '上线的地址'
// } else {
//   baseURL = '开发的地址'
// }

console.log(process.env.NODE_ENV)

// 拦截器
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

// 请求配置
axios.interceptors.request.use((config) => {
  config.headers['Accept'] = 'application/vnd.dpexpo.v1+json'
  config.baseURL = baseURL
  config.timeout = 5000
  return config;
}, (error) => {
  return Promise.reject(error)
})

// get
export function handleGet({
  url,
  params = {}
}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// post
export function handlePost({
  url,
  data
}) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      data
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export default axios
