const { $spider } = $re('utils/nfetch.js');
exports.spiderInfo = async (req, res) => {
    try {
        const data = await $spider('https://xa.58.com/chuzu');
        return res.json({ name: 'jerry', data });
    } catch (error) {
        return $etc.errorHandler(req, error);
    }
}