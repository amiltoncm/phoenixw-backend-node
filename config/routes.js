module.exports = app => {
  
  // Authentication
  app.post('/signup', app.api.user.save);
  app.post('/signin', app.api.auth.signin);
  app.post('/validateToken', app.api.auth.validateToken);

};
