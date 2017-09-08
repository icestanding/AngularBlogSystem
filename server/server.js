import Koa from 'koa';
import Router from 'koa-router';
import ServerStatic from "koa-static";



let server = new Koa();
let main = new Router();

main.use('/', (ctx)=> {

})

