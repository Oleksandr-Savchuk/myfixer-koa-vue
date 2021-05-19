const Router = require('koa-joi-router');

const Joi = Router.Joi;

// const UserValidator = {
//   userInfo: joi.object({
//     firstName: joi.string().min(3).max(20).required(),
//     lastName: joi.string().min(3).max(20).required(),
//     userName: joi.string().min(3).max(20).required(),
//     email: joi.string().email({ tlds: { allow: false } }).required(),
//   }),
  
//   signUp: joi.object({
//     firstName: joi.string().min(3).max(20).required(),
//     lastName: joi.string().min(3).max(20).required(),
//     userName: joi.string().min(3).max(20).required(),
//     email: joi.string().email({ tlds: { allow: false } }).required(),
//     password: joi.string().required(),
//   }),
  
//   signIn: joi.object({
//     email: joi.string().email({ tlds: { allow: false } }).required(),
//     password: joi.string().required(),
//   })
// };

const userSchema = {
  email: Joi.string().min(3).max(255).required(),
};

const UserValidator = {
  signIn: {
    validate: {
      type: 'json',
      body: {
        ...userSchema,
        password: Joi.string().min(4).required(),
      },
    }
  }
};

module.exports = { UserValidator }