const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401).send('Not Logged In');
    }
  }
  module.exports = isLoggedIn