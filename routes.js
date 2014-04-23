module.exports = function(app) {
  // Link to thing router
  app.use('/api/thing', require('./components/thing'));

  // Catch everything else and send a 404
  app.route('/api/*')
    .all(function(req, res) {
      res.send(404);
    });
};
