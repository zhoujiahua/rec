const { RenInfo, RenList } = $re('/models/RentingModel.js');

exports.spiderList = async (req, res) => {
    try {
        const findKey = { city: '西安' };
        const sortKey = { cdate: 'desc' };
        const page = 1;
        const limit = 10;
        const count = await RenList.find(findKey).count();
        const data = await RenList.find(findKey).skip(limit * (Number(page) ? page - 1 : 0)).limit(Number(limit)).sort(sortKey);

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