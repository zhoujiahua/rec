const { SURVER_URL } = require('./setting');

exports.apis = {
    surveyLogin: SURVER_URL + '/jeecg-boot/sys/login',
    surveyAdd: SURVER_URL + '/jeecg-boot/feiyan/add',
    wubaUrl: ['bj', 'sh', 'gz', 'sz', 'xa'].map(item => {
        
    })
}

exports.views = {

}