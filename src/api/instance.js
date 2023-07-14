import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://movie0706.cybersoft.edu.vn',
});
// interceptor
// instance.interceptors.request.use((config) => {
//   config.headers = {
//     ...config.headers,
//     Authorization: 'Bearer ' + localStorage.getItem('token'),
//   };
//   return config;
// });

export default instance;
