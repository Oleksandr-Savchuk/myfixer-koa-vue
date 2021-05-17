const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Redis = require('ioredis');//added

const passport = require('./auth/passport');

const userRouter = require('./user/user.router');
const tokenRouter = require('./token/token.router');
//const categoryRouter = require('./category/category.router');

const app = new Koa();

passport.initialize();

//const redis = new Redis(process.env.REDISS_PASS);//added

//app.context.redis = redis;

app.use(cors());
app.use(bodyParser());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err.isJoi) {
      ctx.throw(400, err.details[0].message);
    }
    console.log(err);
    ctx.throw(400, err);
  }
});//added

const port = process.env.PORT || 3001;

const router = new Router();

router.use('/user', userRouter);
router.use('/token', tokenRouter);
//router.use('/category', categoryRouter);

app.use(router.middleware());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
