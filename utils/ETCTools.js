exports.errorHandler = (req, error) => {
    console.log('ErrorHandler', `${req.url}`.blue, `${Date.now()}`.yellow, ` ${error.message}`.red);
}

exports.logHandler = (log) => {
    console.log('logHandler', log)
}

exports.msgHandler = (res, code = 200, msg = {}) => {
    const newMsg = Object.assign({ success: true, code: 0 }, msg);
    return res.status(code).json(newMsg);
}