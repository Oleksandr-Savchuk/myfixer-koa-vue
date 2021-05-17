const passport = require('koa-passport');

passport.use(require('./jwt.strategy'));
passport.use(require('./local.strategy'));

module.exports = passport;