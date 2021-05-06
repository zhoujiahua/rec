/**
 * https://www.jianshu.com/p/50450791ce51
 * **/

const Crawler = require("crawler");

exports.onceCrawler = (url) => {
    const c = new Crawler();
    c.queue([{
        uri: url,
        // jQuery: false,
        callback: function (error, jqr, done) {
            if (error) {
                console.log(error);
            } else {
                console.log('Grabbed', jqr.body.length, 'bytes');
                let $ = jqr.$;
                res.json({ data: $('html').html() });
            }
            done();
        }
    }]);
}

exports.repSpider = (urls) => {

    return new Promise((resolve, reject) => {
        const c = new Crawler(
            {
                maxConnections: 10,
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