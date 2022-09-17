module.exports = app => {
  // Profiles
  app
    .route('/profiles')
    .all(app.config.passport.authenticate())
    .post(app.api.profile.save)
    .get(app.api.profile.get)

  app
    .route('/profiles/:id')
    .all(app.config.passport.authenticate())
    .get(app.api.profile.getById)
    .put(app.api.profile.save)
    .delete(app.api.profile.del)
}
