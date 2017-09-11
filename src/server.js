import Koa from 'koa';

// to support stupid function
require("babel-core/register");
require("babel-polyfill");

import Router from 'koa-router';
import send from 'koa-send';
import ServerStatic from 'koa-static';
import historyApiFallback from 'koa-history-api-fallback';



let server = new Koa();


server.use(historyApiFallback());
server.use(ServerStatic(__dirname));

let router = new Router();
router.get('/*', async ( ctx )=> {

});


server.use(router.routes()).use(router.allowedMethods());
server.listen(3000);


