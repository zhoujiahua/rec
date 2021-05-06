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

exports.RenList = mongoose.model('renlist', RenList, 'renlist');