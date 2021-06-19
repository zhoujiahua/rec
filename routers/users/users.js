exports.userLogin = (req, res) => {
    return res.render('users/login', { title: '用户登录' })
}

exports.userRegister = (req, res) => {
    return res.render('users/register', { title: '用户注册' })
}