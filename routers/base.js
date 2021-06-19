module.exports = (app) => {
    // Main view
    app.use('/', require('./main/common/index'));
    app.use('/main/content', require('./main/content/index'));

    // Admin view
    app.use('/admin', require('./admin/common/index'));
    app.use('/admin/content', require('./admin/content/index'));

    // User view
    app.use('/users', require('./users/index'));
}