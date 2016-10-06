var express = require('express');
var cors = require('cors');
var  app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//开放CORS 关闭同源策略
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/posts');


var Post = require('./models/post');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});


app.get('/posts', function(req, res) {
  Post.find().exec(function(err, posts) {
    res.json({ posts: posts})
  });
})
app.get('/post/:id', function(req, res) {
  // console.log(req.params.id);
  Post.findOne({_id:req.params.id},function(err,doc) {
    if(err)return res.send('出错了');
    res.json({post:doc})
  })
})
app.post('/posts/', function(req, res) {
  // res.send('the post title is: ' + req.body.title)
  var posts = new Post({
    category:req.body.category,
    title:req.body.title,
    content:req.body.content
  });

  posts.save(function(err){
    if(err) return console.log(err);
    console.log('saved!');
  })

  // res.redirect('/posts');
  res.json({message:"成功"})
})
app.listen(3000, function() {
  console.log('running on port 3000')
})
