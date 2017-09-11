import Koa from 'koa';

// to support stupid function
require("babel-core/register");
require("babel-polyfill");

import Router from 'koa-router';
import send from 'koa-send';
import ServerStatic from 'koa-static';
// import historyApiFallback from 'koa-history-api-fallback';
import session from 'koa-session';



let app = new Koa();
// app.use(historyApiFallback());
app.use(ServerStatic(__dirname));


app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'login', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};

app.use(session(CONFIG, app));



let router = new Router();
router.post('/api/login', async ( ctx )=> {
  let hello = {"result": 1};
  // ctx.request.session
  // ctx.cookies.set(
  //   'login',
  //   'hello world',
  //   {
  //     domain: 'localhost',
  //     path: '/admin',
  //     maxAge: 10 * 60 * 1000,
  //     expires: new Date('2017-02-15'),
  //     httpOnly: false,
  //     overwrite: false
  //   }
  // )


  ctx.response.type = 'json';
  ctx.response.body = hello;
});


app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);


