import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.0.0.120:4000'
})

// export default {
//   get: (url, params) => {
//     return axios.get(url, {
//       params: params
//     })
//   },
//   post: (url, params) => {
//     return axios.post(url, params)
//   },
//   put: (url, params) => {
//     return axios.put(url, params)
//   },
//   delete: (url, params) => {
//     return axios.delete(url, {
//       params: params
//     })
//   }
// }

export default api
