import axios from "axios";
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

axios.defaults.withCredentials = false;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.common['X-Locale'] = localStorage.hasOwnProperty('locale') ? localStorage.locale : window.AppConfig.defaultLocale;
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
// export default axios;

// // axios.js
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:8000/api/', // Set your base URL
//   timeout: 5000, // Set the request timeout
//   headers: {
//     'Content-Type': 'application/json', // Set default headers
//   },
// });

// export default instance;
