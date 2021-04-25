exports.homePage = (req, res) => {
    let house = [];
    let item = {
        id: 1,
        logr: 'gz_1_74303702785062_45992038686985_sortid:672656802@postdate:1619316252974',
        sortid: '1619316252974',
        imgr: 'https://pic6.58cdn.com.cn/anjuke_58/b2639d360ba7c87d2e8c46ab9945205e?w=240&h=180&ss=1&crop=1&cpos=middle&w=240&h=180&crop=1&t=1&srotate=1',
        title: '金泘沱雁塔南路金辉世界城369基地观山悦曲江国际大厦',
        type: '单间',
        room: '次卧(3室)',
        area: '23㎡',
        business: '行政商务中心',
        district: '曲江千林郡',
        route: '距4号线金滹沱地铁站步行1431m',
        source: {
            type: '来自经纪人',
            info: '陕西宜人宜家房地产信息咨询有限公司',
            intro: '宜家地产'
        },
        money: {
            price: '2500',
            units: '元/月'
        },
        link: 'https://xa.58.com/zufang/45992038686985x.shtml'
    }

    for (var i = 0; i < 20; i++) {
        item.id = i + 1
        house.push(item)
    }

    res.render('main/index', {
        title: '租房信息推荐系统',
        house
    });
}
