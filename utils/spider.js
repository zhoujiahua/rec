const fetch = require('node-fetch');
// const Bluebird = require('bluebird');
// fetch.Promise = Bluebird;

exports.spfetch = (url, opt = {}) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.text())
            .then(text => resolve(text)).catch(err => reject(err));
    })
}

exports.spPost = (url, opt = {}) => {
    options.method = 'post';
    return new Promise((resolve, reject) => {
        fetch(url, opt)
            .then(res => res.text())
            .then(text => resolve(text)).catch(err => reject(err));
    })
}