const { msgHandler, logHandler, errorHandler } = $re('/utils/ETCTools.js');
const { ...Tools } = $re('/utils/Tools.js');

global.$ts
global.$msc
global.$log
global.$err

module.exports = (req, res, next) => {
    if (req.url === '/main') res.redirect('/');
    $ts = Tools;
    $msc = msgHandler;
    $log = logHandler;
    $err = errorHandler;
    next();
}