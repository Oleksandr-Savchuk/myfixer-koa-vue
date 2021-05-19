const Router = require('koa-joi-router');
const { TokenController } = require('./token.controller');

const router = new Router();

router.post('/refresh', TokenController.refreshToken);

module.exports = router;