const User = require('./model/user');
const UserDB = require('./model/user.db')
const passport = require('../auth/passport');
const { getUserById } = require('./model/user.db');
const refresh = require('../auth/refresh.token');

const UserController = {}

UserController.signIn = async (ctx, next) => {
  await passport.authenticate('local', (err, response) => {
    if (response) {
      ctx.body = response;
    } else {
      ctx.status = 401;
      if (err) {
        ctx.body = { error: err };
      }
    }
  })(ctx, next);
};


UserController.authenticate = async (ctx, next) => {
  let resultUserId;
  return await passport.authenticate('jwt', async (error, userId) => {
      console.log(error, userId)
      if (userId) {
        resultUserId = userId;
      } else {
        ctx.status = 401;
        if (error) {
          ctx.body = error.errorMessage;
        }
      }
    })(ctx, next)
    .then(() => {
      if (ctx.request.params.id && ctx.request.params.id != resultUserId) {
        ctx.status = 403;
        ctx.body = "UserId mismatch in token and query";
        return true;
      }
    })
};


UserController.getUserById = async (ctx, next) => {
  await UserController.authenticate(ctx, next)
    .then(async (isAccessEnabled) => {
      if (isAccessEnabled) return;

      const response = await UserDB.getUserById(ctx.request.params.id)

      if (response.errorMessage) {
        ctx.status = 404;
        return ctx.body = response.errorMessage;
      } else {
        ctx.body = response.user;
      }
    })
};


UserController.updateUserById = async (ctx, next) => {
  await UserController.authenticate(ctx, next)
    .then(async (isAccessEnabled) => {
      if (isAccessEnabled) return;

      const response = await UserDB.updateUserById(ctx.request.params.id, ctx.request.body);

      if (response.errorMessage) {
        ctx.status = 404;
        return ctx.body = response.errorMessage;
      }

      ctx.body = response.user;
    });
};



UserController.deleteUserById = async (ctx, next) => {
  await UserController.authenticate(ctx, next)
    .then(async (isAccessEnabled) => {
      if (isAccessEnabled) return;

      const response = await UserDB.deleteUserById(ctx.request.params.id);

      if (response.errorMessage) {
        ctx.status = 404;
        return ctx.body = response.errorMessage;
      }

      ctx.body = response.user;
    });
};


UserController.createUser = async (ctx, next) => {
  const response = await UserDB.createUser(ctx.request.body);
  
  if (response.errorMessage) {
    ctx.status = 400;
    return ctx.body = response.errorMessage;
  }

  ctx.body = response.user;
}

module.exports = { UserController };