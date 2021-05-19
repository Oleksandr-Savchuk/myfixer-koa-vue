const Router = require('koa-joi-router');
const passport = require('../auth/passport')

const { UserValidator } = require('./user.validator');
const { UserController } = require('./user.controller');

const router = new Router();

router.post('/sign-in', UserValidator.signIn, UserController.signIn);
router.post('/', UserController.createUser)
router.put('/:id', UserController.updateUserById)
router.delete('/:id', UserController.deleteUserById)
router.get('/:id', UserController.getUserById)

module.exports = router;