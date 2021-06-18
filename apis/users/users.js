const { SECRET_KEY } = $re('/config/secure.js');
const { User } = $re('/models/UserModel.js');
const Validator = require("validator");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.userLogin = async (req, res) => {
    try {
        let r = req.body;
        r.email = !$ts.isem(r.email) ? r.email : '';
        r.password = !$ts.isem(r.password) ? r.password : '';
        if (!Validator.isEmail(r.email)) return $msc(res, 400, { success: false, msg: '邮箱格式有误！' });
        if (Validator.isEmpty(r.password)) return $msc(res, 400, { success: false, msg: '密码不能为空！' });
        if (!Validator.isLength(r.password, { min: 6, max: 18 })) return $msc(res, 400, { success: false, msg: '密码必须在6到18位之间！' });

        // 验证用户信息
        let findUser = await User.findOne({ email: r.email });
        if (!findUser) return $msc(res, 400, { success: false, msg: '用户不存在，请注册后登录！' });
        const isMatch = await bcrypt.compare(r.password, findUser.password);
        if (!isMatch) return $msc(res, 400, { success: false, msg: '用户密码不正确！' });

        // 创建Token
        const rules = { id: findUser.id, email: findUser.email, avatar: findUser.avatar, createDate: findUser.createDate };
        const expiresIn = 3600;
        const accessToken = await jwt.sign(rules, SECRET_KEY, { expiresIn });
        const result = { accessToken, expiresIn, tokenType: 'Bearer' };
        return $msc(res, 200, { msg: '用户登录成功！', result });
    } catch (error) {
        return $err(req, error);
    }
}

exports.userRegister = async (req, res) => {
    try {
        let r = req.body;
        r.email = !$ts.isem(r.email) ? r.email : '';
        r.password = !$ts.isem(r.password) ? r.password : '';
        if (!Validator.isEmail(r.email)) return $msc(res, 400, { success: false, msg: '邮箱格式有误！' });
        if (Validator.isEmpty(r.password)) return $msc(res, 400, { success: false, msg: '密码不能为空！' });
        if (!Validator.isLength(r.password, { min: 6, max: 18 })) return $msc(res, 400, { success: false, msg: '密码必须在6到18位之间！' });

        // 查询用户信息
        let finUser = await User.findOne({ email: r.email });
        if (finUser) return $msc(res, 400, { success: false, msg: '当前用户已存在，请勿重复注册！' });

        // 创建用户信息
        r.avatar = gravatar.url(r.email, { s: '200', r: 'pg', d: 'mm' });
        const salt = await bcrypt.genSalt(10);
        r.password = await bcrypt.hash(r.password, salt);
        const newUser = new User(r)
        const result = await newUser.save();
        result.password = '';
        return $msc(res, 200, { msg: '用户注册成功！', result });
    } catch (error) {
        return $err(req, error);
    }
}