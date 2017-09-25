// console.log("hello world");
import Router from 'koa-router'
import jwt from 'jsonwebtoken';
import asyncBusboy from 'async-busboy';
import monk from 'monk';
import  mongo   from 'mongodb';
import fs from 'fs';
import path from 'path';
const router = new Router();


const imagepath = path.resolve(__dirname + '/../../');
const db = monk('mongodb://127.0.0.1:27017/web', (err, db)=>{
  if(err){
    console.error("Db is not connected", err.message);
  }
});

// include rename
function copyFile(source, target, cb) {
  var cbCalled = false;

  var rd = fs.createReadStream(source);
  rd.on("error", function(err) {
    done(err);
  });
  // while ()
  // console.log(fs.existsSync(target));
    var wr = fs.createWriteStream(target);
    wr.on("error", function (err) {
      done(err);
    });
    wr.on("close", function (ex) {
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
async function AuthenCheck(header) {
  let auth  = JSON.parse(header.authorization);
  await jwt.verify(auth.token , 'chen', async (err, decoded) => {
    if (err) {
      return false
    }
    let user = db.get("user");
    await user.findOne({id: decoded.user}).then( (data) => {

      if(data != null) {
        return true
      }
       else {
        return false
      }

    }).catch((err)=>{
      return false
    });
  });

}



/* api for blog */
router.get('/blog', async ( ctx )=> {

  let blog = db.get('blog');
  await blog.find().then((doc)=>{
    ctx.response.type = 'json';
    ctx.response.body = doc;
  }).catch((err)=> {
    console.log(err);
  })
});

router.get('/blog/:id', async ( ctx )=> {

  let id = new mongo.ObjectId(ctx.params.id);
  let blog = db.get('blog');
  await blog.find({"_id":id}).then((doc)=> {
    ctx.response.type="json";
    ctx.response.body = doc;
  }).catch( (err)=> {
      ctx.response.status = 404;
    }
  );
});


router.post('/blog', async ( ctx )=> {

  if(AuthenCheck(ctx.header)) {
    const {files, fields} = await asyncBusboy(ctx.req);

    let blog = JSON.parse(fields.blog);

    let blogs = db.get('blog');
    blog.time = Date();
    blog.img = "";
    await blogs.insert(blog).then(async ()=> {
      if(files[0]) {
        await blogs.findOne({title: blog.title}).then(async (doc)=> {

          copyFile(files[0].path, imagepath+"/image/" + doc._id + path.extname(files[0].filename), (error)=>{if (error) throw error;});
          await blogs.update({_id: doc._id},{ $set:{ img:doc._id + path.extname(files[0].filename)}}).then();
        })
      }
      else {
        console.log("empty file");
      }
      ctx.response.status = 200;
    }).catch( (err)=> {
        ctx.response.status = 404;
      }
    );

  }
  else {
    ctx.response.status = 422;
  }


});
router.del('/blog/:id', async ( ctx )=> {



});
router.put('/blog/:id', async ( ctx )=> {

});



/* api for auth */
router.post('/api/auth', async(ctx)=>{
  let user = db.get("user");
  await user.findOne({id: ctx.request.body.id}).then( (data) => {

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

router.get('/api/auth/:id', async(ctx)=> {
  let token =  JSON.parse(ctx.params.id);

  await jwt.verify(token.token , 'chen', async (err, decoded) => {
      if (err) {
      ctx.response.status = 422;
    }

    let user = db.get("user");
    await user.findOne({id: decoded.user}).then( (data) => {
      if (data != null) {
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


export default router;
