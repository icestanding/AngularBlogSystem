import Koa from 'koa';
// import fs from 'fs'
import Router from 'koa-router';
var app = new Koa();
var main = new Router();

main.get('/', async (ctx, next)=>{
    ctx.body = 'cnmb haobuhao';
})


// var  = new Router();
// root.use('/', main.routes()).use(main.allowedMethods());

var router = new Router();


router.use('/', main.routes()).use(main.allowedMethods());


// app.use(router.routes()).use(router.allowedMethods());
   app.use(router.routes).use(router.allowedMethods());
app.listen(5000)