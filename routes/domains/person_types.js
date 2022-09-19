module.exports = app => {
  // Person types
  app
    .route('/domains/person_types')
    .all(app.config.passport.authenticate())
    .post(app.api.domains.person_type.save)
    .get(app.api.domains.person_type.get);

  app
    .route('/domains/person_types/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.domains.person_type.save)
    .delete(app.api.domains.person_type.del);
}
