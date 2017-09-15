import Koa from 'koa';

// to support stupid function
require("babel-core/register");
require("babel-polyfill");

import Router from 'koa-router';
import ServerStatic from 'koa-static';
import historyApiFallback from 'koa-history-api-fallback';
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';
import jwt from 'jsonwebtoken';
import monk from 'monk';
import https from 'https';
import http from 'http';
import fs from 'fs';


let app = new Koa();
// const db = monk('mongodb://127.0.0.1:27017/blog', (err, db)=>{
//   if(err){
//     console.error("Db is not connected", err.message);
//   }
// });
// const users = db.get('user');
// users.find({"user_name":"admin"}).then((val)=>{
//   console.log(val);
// }).catch((err)=> {
//   console.log("fuck up");
// })
// users.insert({"user_name":"123", "password": "321"}).then(()=>{
//   console.log("success");
// }).catch((err)=>console.log(err));





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



 router.post('/api/user', async(ctx)=>{
//    if(ctx.request.body.id != null) {
//       let usertoken = { user:"hnmb"};
//    let token = jwt.sign(usertoken, 'asdasd');
//    ctx.response.type = 'json';
//    ctx.response.body = {
//      message: "successful",
//      token: token
//    };
//    ctx.response.status=500;
//  }
// else {
//
// }
  console.log(ctx.request.body.id);

 });



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
  // ctx.body = ctx.request.body;
  // console.log(ctx.body);
  // if(ctx.session.isNew) {
  //   console.log("user has not log in");
  // }
  // else {
  //
  // }
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

  // if(ctx.session.isNew()) {
  //   console.log("not login");
  // }
  // else {
  //   console.log("already login");
  // }
});

app.use(router.routes()).use(router.allowedMethods());
// let start = async ()=> {
//   await monk('localhost:27018/myblog', (err, db)=>{
//     if(err){
//       console.error("Db is not connected", err.message);
//     }
//     else {
//       console.log("successful");
//     }
//   });
//   app.listen(3000);
//   console.log("run");
// }
// start();
// http server
// http.createServer(app.callback()).listen(3000);
// https server

// let option = {
//   key: fs.readFileSync("./encryption/host.key"),
//   cert: fs.readFileSync("./encryption/host.cert")
// }



app.listen(3000);


// https.createServer(app.callback()).listen(3000);



