const { RenInfo } = $re('/models/RentingModel.js');
const { setCrawList } = $re('/utils/Spider.js');
const { czInfo } = $re('/config/setting.js');
const { v4 } = require('uuid');

const initRenInfo = async () => {
    const len = czInfo.length - 1;
    czInfo.forEach(async (v, k) => {
        try {
            const findInfo = await RenInfo.findOne({ key: v.key, name: v.name });
            if (!findInfo) new RenInfo(v).save();
            if (len == k) {
                initSpiderInfo()
                console.log(`Data collection successful-${Date()}`.blue);
            };
        } catch (error) {
            console.error(err)
        }
    })
}

const initSpiderInfo = async () => {
    try {
        const findInfo = await RenInfo.find();
        const newInfo = findInfo.map(v => {
            v.curl = `${v.protocol}://${v.link}/${v.plate}/?PGTID=${v4()}&ClickID=${v.cid}`;
            return v;
        })
        setCrawList(newInfo);
    } catch (error) {
        console.log(error);
    }
}

module.exports = () => {
    initRenInfo();
}