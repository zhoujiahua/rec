const { RenInfo, RenList } = $re('/models/RentingModel.js');

exports.spiderList = async (req, res) => {
    try {
        const r = req.query;
        console.log(r);
        r.page = r.page || 1;
        r.limit = r.limit || 10;
        r.wk = Object.assign({ city: '西安' }, r.wk);
        r.sort = Object.assign({ cdate: 'desc' }, r.sort);
        r.wk.city = r.wk.city.replace('市', '');
        const count = await RenList.find(r.wk).count();
        const data = await RenList.find(r.wk).skip(r.limit * (Number(r.page) ? r.page - 1 : 0)).limit(Number(r.limit)).sort(r.sort);
        return $etc.msgHandler(res, 200, { count, data });
    } catch (error) {
        $etc.errorHandler(req, error);
    }
}

exports.spiderCity = async (req, res) => {
    try {
        const data = await RenInfo.find();
        return $etc.msgHandler(res, 200, { data });
    } catch (error) {
        $etc.errorHandler(req, error);
    }
}