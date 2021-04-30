const Crawler = require("crawler");
const c = new Crawler();

// const c = new Crawler(
//     {
//         maxConnections: 10,
//         callback: function (error, res, done) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 let $ = res.$,
//                     html = $('html').html();
//                 console.log(html);
//             }
//             done();
//         }
//     }
// );

// module.exports = (urls) => c.queue(urls);
module.exports = (url) => {
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



// const c = new Crawler({
//     maxConnections: 10,
//     // 这个回调每个爬取到的页面都会触发
//     callback: function (error, res, done) {
//         if (error) {
//             console.log(error);
//         } else {
//             var $ = res.$;
//             // $默认使用Cheerio
//             // 这是为服务端设计的轻量级jQuery核心实现
//             console.log($("title").text());
//         }
//         done();
//     }
// });

// // 爬取一个URL，使用默认的callback
// c.queue('http://www.amazon.com');

// // 爬取URL列表
// c.queue(['http://www.google.com/', 'http://www.yahoo.com']);

// // 爬取页面，自定义callback和参数
// c.queue([{
//     uri: 'http://parishackers.org/',
//     jQuery: false,

//     // 覆盖全局的callback
//     callback: function (error, res, done) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);

// // 在队列中加入一些HTML代码，无需爬取(mostly for tests)
// c.queue([{
//     html: '<p>This is a <strong>test</strong></p>'
// }]);