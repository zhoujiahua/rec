const { repSpider } = $re('utils/crawler.js');
const { RenList } = $re('models/RentingModel.js');

exports.spiderList = async (req, res) => {
    const content = [];
    let url = 'https://xa.58.com/chuzu/?PGTID=0d100000-001e-32e0-a655-b636d49d6b9d&ClickID=4';
    let { $ } = await repSpider([url]);
    let html = $('.house-list li');

    html.each((k, v) => {
        let newItem = {};
        let title = $(v).find('.des .strongbox').text().trim().replace(/\s/g, '').split('|');
        let money = $(v).find('.list-li-right .money').text().trim();
        let room = $(v).find('.room').text().trim();
        let infor = $(v).find('.des .infor a');
        let jjr = $(v).find('.des .jjr');
        let traffic = infor.parent().text().trim().match(/(?<=\s).*?(?=m)/);
        newItem.logr = $(v).attr('logr');
        newItem.sortid = $(v).attr('sortid');
        newItem.imgr = $(v).find('.img-list img').attr('lazy_src');
        newItem.type = title.length ? title[0] : '';
        newItem.title = title.length ? title[1] : '';
        newItem.province = '';
        newItem.city = '';
        newItem.adcode = '';
        newItem.distance = '';
        newItem.room = room.replace(/\s/g, '')
        newItem.money = {
            price: money ? money.match(/\d+/)[0] : '',
            units: money ? money.match(/\D+/)[0] : ''
        }
        newItem.infor = {
            site: infor.eq(0).text(),
            housing: infor.eq(1).text(),
            traffic: traffic ? traffic[0].trim() : ''
        };
        newItem.source = {
            type: jjr.text().trim().match(/\S.*?(?=:)/) ? jjr.text().trim().match(/\S.*?(?=:)/)[0] : '',
            info: jjr.find('.jjr_par .jjr_par_dp').text().trim(),
            intro: jjr.find('.jjr_par .listjjr').text().trim()
        };
        newItem.link = $(v).find('.des .strongbox').attr('href');
        if (newItem.title) {
            content.push(newItem);
            RenList.findOne({ sortid: newItem.sortid, title: newItem.title }).then(data => {
                if (data) return false;
                const newContent = new RenList(newItem);
                newContent.save();
            })
        }
    })

    return res.json({ success: true, data: content });
}