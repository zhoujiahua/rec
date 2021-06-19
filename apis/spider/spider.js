const { RenInfo, RenList } = $re('/models/RentingModel.js');

exports.spiderList = async (req, res) => {
    try {
        const r = req.query;
        console.log(r);
        r.page = r.page || 1;
        r.limit = r.limit || 10;
        r.wk = r.wk.replace('市', '') || '西安';
        r.title = r.title || '';
        r.sort = r.sort || 'desc';
        r.like = r.like || false;

        let count = 0,
            result = [],
            pmr = { city: r.wk },
            spm = { cdate: r.sort };

        if (r.like) {
            pmr = { title: new RegExp(r.title) };
        }
        
        count = await RenList.find(pmr).count();
        result = await RenList.find(pmr).skip(r.limit * (Number(r.page) ? r.page - 1 : 0)).limit(Number(r.limit)).sort(spm);
        return $msc(res, 200, { count, result });
    } catch (error) {
        $err(req, error);
    }
}

exports.spiderCity = async (req, res) => {
    try {
        const data = await RenInfo.find();
        return $etc.msgHandler(res, 200, { data });
    } catch (error) {
        $err(req, error);
    }
}