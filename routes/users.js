module.exports = app => {
  
  app.route('/users/signin')
    .post(app.api.user.save);
  
  // Users
  app.route('/users')
    .all(app.config.passport.authenticate())
    .post(app.api.user.save)
    .get(app.api.user.get);
  
  app.route('/users/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.user.save)
    .delete(app.api.user.del);
  
}
