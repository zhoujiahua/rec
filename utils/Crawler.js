/**
 * https://www.jianshu.com/p/50450791ce51
 * **/

const Crawler = require("crawler");

exports.crawQueue = (urls) => {
    return new Promise((resolve, reject) => {
        const c = new Crawler(
            {
                maxConnections: 10,
                // rateLimit: '2000',
                callback: (error, res, done) => {
                    if (error) return reject(error);
                    resolve(res);
                    done();
                }
            }
        );
        c.queue(urls);
    })
}

exports.onceCrawler = (url) => {
    const c = new Crawler();
    return new Promise((resolve, reject) => {
        c.queue([{
            uri: url,
            jQuery: true,
            callback: function (error, jqr, done) {
                if (error) return reject(error);
                resolve(jqr);
                done();
            }
        }]);
    })
}

exports.repSpider = (urls) => {
    return new Promise((resolve, reject) => {
        const c = new Crawler(
            {
                maxConnections: 10,
                callback: (error, jqr, done) => {
                    if (error) return reject(error);
                    resolve(jqr);
                    done();
                }
            }
        );
        c.queue(urls);
    })
}