exports.homePage = (req, res) => {
    return res.render('main/index', { title: '租房信息推荐系统' });
}
