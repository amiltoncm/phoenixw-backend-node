module.exports = app => {
  
  // Authentication
  app.post('/signup', app.api.user.save);
  app.post('/signin', app.api.validations.auth.signin);
  app.post('/validateToken', app.api.validations.auth.validateToken);

};
