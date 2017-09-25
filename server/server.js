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
import fs from 'fs';
import path from 'path';
import serve from 'koa-static';
import multer from 'koa-multer';
import asyncBusboy from 'async-busboy';
import mount from 'koa-mount';







function copyFile(source, target, cb) {
  var cbCalled = false;

  var rd = fs.createReadStream(source);
  rd.on("error", function(err) {
    done(err);
  });
  var wr = fs.createWriteStream(target);
  wr.on("error", function(err) {
    done(err);
  });
  wr.on("close", function(ex) {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}


console.log(path.resolve(__dirname + '/../'));

let app = new Koa();

app.use(serve(path.resolve(__dirname + '/../../image')));
app.use(serve(path.resolve(__dirname + '/../../')));
app.use(serve(path.resolve(__dirname + '/../')));
const imagepath = path.resolve(__dirname + '/../../');


// static root
app.use(mount('/dist', serve(__dirname + '/../', {defer: true})));
// app.use(route.post('/profile', upload.single('avatar')));

let ObjectId = require('mongodb').ObjectId;
const db = monk('mongodb://127.0.0.1:27017/web', (err, db)=>{
  if(err){
    console.error("Db is not connected", err.message);
  }
});
const users = db.get('blog');
// users.find({"user_name":"admin"}).then((val)=>{
//   console.log(val);
// }).catch((err)=> {
//   console.log("fuck up");
// })
// users.insert({"user_name":"123", "password": "321"}).then(()=>{
//   console.log("success");
// }).catch((err)=>console.log(err));
var timeStamp = Math.floor(Date.now());
console.log(Intl.DateTimeFormat().year);

var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDate() + "/"
  + (currentdate.getMonth()+1)  + "/"
  + currentdate.getFullYear() + " @ "
  + currentdate.getHours() + ":"
  + currentdate.getMinutes() + ":"
  + currentdate.getSeconds();

console.log(datetime)


// console.log(timeStamp + "timezone is " +timezone);

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




// blog function
// zeng shan gai cha

router.get('/blog', async ( ctx )=> {

  // if(ctx.session.isNew()) {
  //   console.log("not login");
  // }
  // else {
  //   console.log("already login");
  // }
  let blog = db.get('blog');
  await blog.find().then((val)=>{
    ctx.response.type = 'json';
    ctx.response.body = val;
  }).catch((err)=> {
    console.log("fuck up");
    console.log(err);
  })


});
router.get('/blog/:id', async ( ctx )=> {

  // let ObjectId = require;
  console.log(ctx.params.id);
  // console.log(router.param("id"));
  let id = new ObjectId(ctx.params.id);
  let blog = db.get('blog');
  await blog.find({"_id":id}).then((val)=> {
      ctx.response.type="json";
      ctx.response.body = val;
  }).catch( (err)=> {
      ctx.response.status = 404;
    }
  );




  // if(ctx.session.isNew()) {
  //   console.log("not login");
  // }
  // else {
  //   console.log("already login");
  // }
});



























router.post('/blog', async ( ctx )=> {


  // let blog = db.get('blog');
  // ctx.request.body.time = Date();
  // await blog.insert(ctx.request.body).then(()=> {
  //     ctx.response.status = 200;
  // }).catch( (err)=> {
  //     ctx.response.status = 404;
  //   }
  // );
  const {files, fields} = await asyncBusboy(ctx.req);

  let blog = JSON.parse(fields.blog);
  console.log(blog);
  copyFile(files[0].path, imagepath+"/image/"+files[0].filename, (error)=>{if (error) throw error;});

  // if(ctx.session.isNew()) {
  //   console.log("not login");
  // }
  // else {
  //   console.log("already login");
  // }
});
router.del('/blog/:id', async ( ctx )=> {

  // if(ctx.session.isNew()) {
  //   console.log("not login");
  // }
  // else {
  //   console.log("already login");
  // }
});
router.put('/blog/:id', async ( ctx )=> {

  // if(ctx.session.isNew()) {
  //   console.log("not login");
  // }
  // else {
  //   console.log("already login");
  // }
});
































// router.post('/image',async (ctx)=> {
//
//   const {files, fields} = await asyncBusboy(ctx.req);
//   // let a = fs.open('files', 'a+', (err,fd)=>{
//   //   if(err) throw err;
//   //   console.log("cnmlgb");
//   // }),
//   //
//   //
//   // // console.log(typeof files);
//   // fs.writeFile(imagepath+'/cnm.jpg', files, 'binary', function (err,data) {
//   //   if(err) throw err;
//   //   console.log("complete");
//   // });
//   // console.log(fields)
//
//   let blog = JSON.parse(fields.blog);
//   console.log(blog);
//   copyFile(files[0].path, imagepath+"/image/"+files[0].filename, (error)=>{if (error) throw error;});
//   // fs.createReadStream(files).pipe(fs.createWriteStream('newLog.jpg'));
// });

























// router.post('/image', async (ctx) => {
//   console.log("receive");
//   // console.log(ctx.request);
//   // console.log(ctx.request.body.files);
//   // ctx.response.body = ctx.request.body;
// })





router.post('/', async ( ctx )=> {

  // if(ctx.session.isNew()) {
  //   console.log("not login");
  // }
  // else {
  //   console.log("already login");
  // }
});
















router.post('/api/authenticate', async(ctx)=>{
  let user = db.get("user");
  await user.findOne({id: ctx.request.body.id}).then( (data) => {
    console.log(data);
    if(data != null) {
      if(data.password == ctx.request.body.password) {
        let usertoken = { user: ctx.request.body.id};
        let token = jwt.sign(usertoken, 'chen', {expiresIn: '1h'});
        ctx.response.type = 'json';
        ctx.response.body = {
          message: "successful",
          token:token
        }
        ctx.response.status = 200;
      }
      else {
        ctx.response.status =  422;
      }
    }
    else {
      ctx.response.status = 404;
    }
  }).catch((err)=> {
    console.log(err);
    ctx.response.status=500;
  })
});

router.post('/api/islogin', async(ctx)=> {
  console.log(ctx.request.body.token);
  await jwt.verify(ctx.request.body.token, 'chen', async (err, decoded) => {
    if (err) {
      ctx.response.status = 422;
    }
    console.log(decoded);
    let user = db.get("user");

    await user.findOne({id: decoded.user}).then( (data) => {
        if (data!=null) {
          ctx.response.status = 200;
        }
        else {
          ctx.response.status = 404;
        }
      }).catch((err)=>{
        ctx.response.status = 422;
      });
    });

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

  // let hello = {"result": 1};
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
//


app.listen(3000);




