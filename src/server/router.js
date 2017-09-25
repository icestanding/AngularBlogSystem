// console.log("hello world");
import Router from 'koa-router'
import jwt from 'jsonwebtoken';
import multer from 'koa-multer';
import asyncBusboy from 'async-busboy';
import monk from 'monk';
const router = new Router();

const db = monk('mongodb://127.0.0.1:27017/web', (err, db)=>{
  if(err){
    console.error("Db is not connected", err.message);
  }
});


router.get('/blog', async ( ctx )=> {

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
  console.log(ctx.params.id);
  let id = new ObjectId(ctx.params.id);
  let blog = db.get('blog');
  await blog.find({"_id":id}).then((val)=> {
    ctx.response.type="json";
    ctx.response.body = val;
  }).catch( (err)=> {
      ctx.response.status = 404;
    }
  );
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
// router.post('/image', async (ctx) => {
//   console.log("receive");
//   // console.log(ctx.request);
//   // console.log(ctx.request.body.files);
//   // ctx.response.body = ctx.request.body;
// })


router.post('/api/auth', async(ctx)=>{
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

router.get('/api/auth/:id', async(ctx)=> {
  let token =  JSON.parse(ctx.params.id);
  console.log(token);
  await jwt.verify(token.token , 'chen', async (err, decoded) => {
    if (err) {
      ctx.response.status = 422;
    }
    console.log(decoded);
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
