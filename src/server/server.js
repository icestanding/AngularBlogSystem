// to support babel
import "babel-core/register";
import "babel-polyfill";

import Koa from 'koa';
import historyApiFallback from 'koa-history-api-fallback';
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';

import path from 'path';
import serve from 'koa-static';
import mount from 'koa-mount';
import router from './router'



console.log(path.resolve(__dirname + '/../'));

let app = new Koa();

// app.use(serve(path.resolve(__dirname + '/../')));



// static root
app.use(mount('/', serve(__dirname + '/../')));
app.use(historyApiFallback());



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
app.use(router.routes()).use(router.allowedMethods());
const ui = new Koa();
ui.use(serve(path.resolve(__dirname + '/../')));
// for image
ui.use(serve(path.resolve(__dirname + '/../../')));
ui.use(serve(path.resolve(__dirname + '/../../image')));
app.use(mount('/', ui));

app.listen(3000);




