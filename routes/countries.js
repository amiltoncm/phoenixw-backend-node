module.exports = app => {
  // Countries
  app
    .route('/countries')
    .all(app.config.passport.authenticate())
    .post(app.api.country.save)
    .get(app.api.country.get);

  app
    .route('/countries/:id')
    .all(app.config.passport.authenticate())
    .get(app.api.country.getById)
    .put(app.api.country.save)
    .delete(app.api.country.del);
}
