module.exports = app => {
  // Status
  app
    .route('/domains/status')
    .all(app.config.passport.authenticate())
    .post(app.api.domains.status.save)
    .get(app.api.domains.status.get)

  app
    .route('/domains/status/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.domains.status.save)
    .delete(app.api.domains.status.del)
}
