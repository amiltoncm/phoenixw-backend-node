module.exports = app => {
  // Public places
  app
    .route('/domains/public_places')
    .all(app.config.passport.authenticate())
    .post(app.api.domains.public_place.save)
    .get(app.api.domains.public_place.get);

  app
    .route('/domains/public_places/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.domains.public_place.save)
    .delete(app.api.domains.public_place.del);
}
