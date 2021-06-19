const { $spider } = $re('/utils/nfetch.js');
const { czInfo } = $re('/config/setting.js');

exports.spiderInfo = async (req, res) => {
    try {
        const data = await $spider('https://xa.58.com/chuzu');
        return res.json({ name: 'jerry', data });
    } catch (error) {
        return $etc.errorHandler(req, error);
    }
}

exports.cityList = async (req, res) => {
    try {
        return $msc(res, 200, { result: czInfo });
    } catch (error) {
        return $err(req, res, error);
    }
}