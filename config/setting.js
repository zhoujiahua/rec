const czUrl = '58.com';

exports.baseURL = '';
exports.czInfo = [
    {
        sort: '0',
        key: 'bj',
        city: '上海',
        province: '',
        adcode: '',
        distance: ''
    },
    {
        sort: '1',
        key: 'sh',
        city: '上海',
        province: '',
        adcode: '',
        distance: ''
    },
    {
        sort: '3',
        key: 'gz',
        city: '广州',
        province: '',
        adcode: '',
        distance: ''
    },
    {
        sort: '4',
        key: 'sz',
        city: '深圳',
        province: '',
        adcode: '',
        distance: ''
    },
    {
        sort: '5',
        key: 'cd',
        city: '成都',
        province: '',
        adcode: '',
        distance: ''
    },
    {
        sort: '6',
        key: 'xa',
        city: '西安',
        province: '',
        adcode: '',
        distance: ''
    }
].map(v => {
    v.cid = '2';
    v.plate = 'chuzu';
    v.protocol = 'https';
    v.link = `${v.key}.${czUrl}`;
    v.curl = '';
    return v;
})