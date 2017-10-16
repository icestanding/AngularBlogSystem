// console.log("hello world");
import Router from 'koa-router'
import jwt from 'jsonwebtoken';
import asyncBusboy from 'async-busboy';
import monk from 'monk';
import  mongo   from 'mongodb';
import fs from 'fs';
import path from 'path';
import cate from 'truncate';
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

// check authentification
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
router.get('/api/blog', async ( ctx )=> {
  // let i = -1;
  let blog = db.get('blog');
  await blog.find({}, {sort: {time: -1}}).then((doc)=>{
    ctx.response.type = 'json';
    
    ctx.response.body = doc;
  }).catch((err)=> {
    console.log(err);
  })
});

router.get('/api/blog/:id', async ( ctx )=> {

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

router.delete('/api/blog/:id', async ( ctx )=> {

  console.log("cnmb");
  let id = new mongo.ObjectId(ctx.params.id);
  let blogs = db.get('blog');
  await blogs.findOne({_id: mongo.ObjectId(id)}).then(async (doc) => {
    if(doc.img != "") {
      await fs.stat(imagepath + "/image/" + doc.img, async function (err, stats) {
        if (err) {
          return console.error(err);
        }
        await fs.unlink(imagepath + "/image/" + doc.img, function (err) {
          if (err) return console.log(err);
        })
      })
    }
  })
  await blogs.remove({"_id":id}).then((doc)=> {
    ctx.response.type="json";
    ctx.response.body = doc;
  }).catch( (err)=> {
    ctx.response.status = 404;
  }
  );
});

router.post('/api/blog', async ( ctx )=> {

  if(AuthenCheck(ctx.header)) {
    const {files, fields} = await asyncBusboy(ctx.req);
    let blog = JSON.parse(fields.blog);
    let blogs = db.get('blog');
    blog.time = new Date();
    blog.img = "";
    let id;
    // console.log(blog);
    // cut 100 words


    await blogs.insert(blog).then(async ()=> {
      if(files[0]) {
        await blogs.findOne({title: blog.title}).then(async (doc)=> {
          copyFile(files[0].path, imagepath+"/image/" + doc._id + path.extname(files[0].filename), (error)=>{if (error) throw error;});
          await blogs.update({_id: doc._id},{ $set:{ img: "image/" + doc._id + path.extname(files[0].filename)}}).then();
        })
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

router.put('/api/blog/:id', async ( ctx )=> {
  if(AuthenCheck(ctx.header)) {
    const {files, fields} = await asyncBusboy(ctx.req);
    let blog = JSON.parse(fields.blog);
    let id = fields.id;
    let blogs = db.get('blog');
    await blogs.update({_id: mongo.ObjectId(id)}, {$set:blog}).then(async () => {
      if (files[0]) {
        await blogs.findOne({_id: mongo.ObjectId(id)}).then(async (doc) => {
          // delete old
          if(doc.img != "") {
            await fs.stat(imagepath  + "/" + doc.img, async function (err, stats) {
              if (err) {
                return console.error(err);
              }
             await fs.unlink(imagepath + "/" + doc.img, function (err) {
                if (err) return console.log(err);
                copyFile(files[0].path, imagepath + "/image/" + doc._id + path.extname(files[0].filename), (error) => {
                  if (error) throw error;
                });
                blogs.update({_id: doc._id}, {$set: {img: "/image/" + doc._id + path.extname(files[0].filename)}}).then();
              })
            })
          }
          else {
            copyFile(files[0].path, imagepath + "/image/" + doc._id + path.extname(files[0].filename), (error) => {
              if (error) throw error;
            });
            blogs.update({_id: doc._id}, {$set: {img: doc._id + path.extname(files[0].filename)}}).then();
          }
        })
      }
    })
  }
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
