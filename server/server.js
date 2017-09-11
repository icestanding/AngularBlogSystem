import Koa from 'koa';

// to support stupid function
require("babel-core/register");
require("babel-polyfill");

import Router from 'koa-router';
import ServerStatic from 'koa2-static';
import send from 'koa-send';
import path from 'path';
// let regeneratorRuntime =  require("regenerator-runtime");





console.log("cnm");

let server = new Koa();
let main = new Router();


server.use(ServerStatic({
  path: "/",
  root: __dirname + "/dist"
}));



console.log(__dirname);

// main.get('/', async (ctx)=> {
//
//   // await send(ctx, ctx.path);
// })
