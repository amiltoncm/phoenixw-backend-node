module.exports = app => {
  // States
  app
    .route('/states')
    .all(app.config.passport.authenticate())
    .post(app.api.states.save)
    .get(app.api.states.get)

  app
    .route('/states/:id')
    .all(app.config.passport.authenticate())
    .get(app.api.states.getById)
    .put(app.api.states.save)
    .delete(app.api.states.del)
}
