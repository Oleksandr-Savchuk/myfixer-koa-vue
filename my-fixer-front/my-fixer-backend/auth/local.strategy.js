const LocalStrategy = require('passport-local');
const jwt = require('jwt-simple');
const config = require('../config/config');

const UserDB = require('../user/model/user.db');

const opts = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
  session: false,
};

const localStrategy = new LocalStrategy(opts, async (req, email, password, done) => {
  UserDB.checkPassword(email, password)
    .then((response) => {
      if (response.errorMessage) {
        return done({ message: response.errorMessage }, false);
      }
      
      const user = response.user;
      
      const refreshToken = jwt.encode({
        expireDate: new Date().setTime(new Date().getTime() + 1000 * 60 * 60 * 24), // 24h
      }, config.AUTH.SECRET_KEY_REFRESH);

      const accessToken = {
        userId: user.id,
        refreshToken: refreshToken,
        expireDate: new Date().setTime(new Date().getTime() + 1000 * 60 * 60 * 8) // + 1000 * 60 * 60 * 1), // 1h
      };

      const credentials = {
        accessToken: jwt.encode(accessToken, config.AUTH.SECRET_KEY)        
      };

      return done(null, {user: user, accessToken: credentials.accessToken});
    })
    .catch((err) => {
      done({ message: err.message }, false);
    });
});

module.exports = localStrategy;