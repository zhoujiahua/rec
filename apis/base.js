module.exports = (app) => {
    app.use('/api/users', require('./users/index'));
    app.use('/api/check', require('./check/index'));
    app.use('/api/spider', require('./spider/index'));
    app.use('/api/renting', require('./renting/index'));
}