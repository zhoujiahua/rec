const { spfetch } = $re('/utils/spider.js');
const Crawler = require("crawler");

exports.spiderList = async (req, res) => {
    let url = 'https://xa.58.com/chuzu/?PGTID=0d100000-001e-32e0-a655-b636d49d6b9d&ClickID=4';
    const data = await spfetch(url);
    res.json({ data });
}