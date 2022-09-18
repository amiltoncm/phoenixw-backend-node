module.exports = app => {
  // States
  app
    .route('/states')
    .all(app.config.passport.authenticate())
    .post(app.api.state.save)
    .get(app.api.state.get);

  app
    .route('/states/:id')
    .all(app.config.passport.authenticate())
    .get(app.api.state.getById)
    .put(app.api.state.save)
    .delete(app.api.state.del);
}
