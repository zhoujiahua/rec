const fetch = require('node-fetch');

exports.$spider = (url, params = {}) => {
    params.method = 'get';
    return new Promise((resolve, reject) => {
        fetch(url, params)
            .then(body => params.type ? body.json() : body.text())
            .then(body => resolve(body)).catch(error => reject(error));
    })
}