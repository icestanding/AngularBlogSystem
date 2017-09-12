import Koa from 'koa';

// to support stupid function
require("babel-core/register");
require("babel-polyfill");

import Router from 'koa-router';

import ServerStatic from 'koa-static';
import historyApiFallback from 'koa-history-api-fallback';
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';


let app = new Koa();
app.use(bodyParser());
app.use(historyApiFallback());
app.use(ServerStatic(__dirname));


app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'login',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
};

app.use(session(CONFIG, app));

let router = new Router();
router.post('/api/login', async ( ctx )=> {

  // // let hello = {"result": 1};
  // let n = ctx.session.views || 0;
  // ctx.session.views = ++n;
  // ctx.body = n + ' views';
  // console.log(ctx.session.views);
  // // ctx.session.views = null;
  // console.log(ctx.session);
  // ctx.cookies.set("cnm", "hahaha");
  // ctx.response.type = 'json';
  // ctx.response.body = hello;
  ctx.body = ctx.request.body;
  console.log(ctx.body);
  if(ctx.session.isNew) {
    console.log("user has not log in");
  }
  else {

  }
});

router.post('/api/islogin', async ( ctx )=> {

  // // let hello = {"result": 1};
  // let n = ctx.session.views || 0;
  // ctx.session.views = ++n;
  // ctx.body = n + ' views';
  // console.log(ctx.session.views);
  // // ctx.session.views = null;
  // console.log(ctx.session);
  // ctx.cookies.set("cnm", "hahaha");
  // ctx.response.type = 'json';
  // ctx.response.body = hello;

});

router.post('/api/logout', async ( ctx )=> {

  if(ctx.session.isNew()) {
    console.log("not login");
  }
  else {
    console.log("already login");
  }
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
console.log("run");


