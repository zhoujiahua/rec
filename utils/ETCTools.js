exports.errorHandler = (req, error) => {
    console.log('ErrorHandler', `${req.url}`.blue, `${Date.now()}`.yellow, ` ${error.message}`.red);
}

exports.logHandler = (log) => {
    console.log('logHandler', log)
}
