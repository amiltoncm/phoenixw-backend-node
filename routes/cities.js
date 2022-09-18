module.exports = app => {
  // Cities
  app
    .route('/cities')
    .all(app.config.passport.authenticate())
    .post(app.api.city.save)
    .get(app.api.city.get);

  app
    .route('/cities/:id')
    .all(app.config.passport.authenticate())
    .get(app.api.city.getById)
    .put(app.api.city.save)
    .delete(app.api.city.del);
}
