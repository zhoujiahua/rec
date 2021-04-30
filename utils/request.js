const { baseURL } = $re('config/setting.js');
const axios = require('axios');

axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = process.env.BASE_URL || baseURL;

axios.interceptors.request.use((config) => {
    if (config.url.indexOf('://') !== -1) {
        config.baseURL = ""
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
    return res;
}, (error) => {
    return Promise.reject(error.response);
});

exports.$fetch = (url, params = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(url, { params });
            return resolve(response);
        } catch (error) {
            return reject(error);
        }
    })
}

exports.$post = (url, params = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.post(url, params);
            return resolve(response);
        } catch (error) {
            return reject(error);
        }
    })
}