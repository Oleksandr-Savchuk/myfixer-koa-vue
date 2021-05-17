const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const config = require('../config/config');
const jwt = require('jwt-simple');

const UserDB = require('../user/model/user.db');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: config.AUTH.SECRET_KEY,
};

const jwtStrategy = new JwtStrategy(opts, (jwtPayload, done) => {
  const refreshToken = jwt.decode(jwtPayload.refreshToken, config.AUTH.SECRET_KEY_REFRESH);

  if (refreshToken.expireDate <= new Date().getTime()) {
    done({ isExpired: true, errorMessage: 'Refresh token is expired.' }, false);
  } else if (jwtPayload.expireDate <= new Date().getTime()) {
    done({ isExpired: true, errorMessage: 'Access token is expired.' }, false);
  } else {
    UserDB.getUserById(jwtPayload.userId)
    .then((user) => {
      done(null, jwtPayload.userId);
    })
    .catch((err) => done({ errorMessage: err.message }, false));
  }
});

module.exports = jwtStrategy;