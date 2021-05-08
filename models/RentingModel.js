const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RenList = new Schema({
    logr: String,
    sortid: String,
    title: String,
    type: String,
    money: String,
    imgr: String,
    province: String,
    city: String,
    adcode: String,
    distance: String,
    room: Object,
    money: Object,
    infor: Object,
    source: Object,
    link: String,
    cdate: {
        type: Date,
        default: Date.now().toString(),
    }
})

const RenInfo = new Schema({
    city: String,
    province: String,
    adcode: String,
    distance: String,
    sort: String,
    key: String,
    cid: String,
    plate: String,
    protocol: String,
    link: String,
    curl: String,
    date: {
        type: Date,
        default: Date.now().toString()
    }
})

exports.RenList = mongoose.model('renlist', RenList, 'renlist');
exports.RenInfo = mongoose.model('reninfo', RenInfo, 'reninfo');
