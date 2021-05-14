const { RenInfo, RenList } = $re('/models/RentingModel.js');

exports.spiderList = async (req, res) => {
    try {
        const r = req.query;
        console.log(r);
        r.page = r.page || 1;
        r.limit = r.limit || 10;
        r.wk = r.wk || '西安';
        r.wk = r.wk.replace('市', '');
        r.sort = r.sort || 'desc';

        const findParam = { city: r.wk },
            sortParam = { cdate: r.sort };
        const count = await RenList.find(findParam).count();
        const data = await RenList.find(findParam).skip(r.limit * (Number(r.page) ? r.page - 1 : 0)).limit(Number(r.limit)).sort(sortParam);
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