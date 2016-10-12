var express = require('express');
var cors = require('cors');
var  app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var　routes = require('./routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
routes(app);
//开放CORS 关闭同源策略
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/posts');


var Post = require('./models/post');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});



app.listen(3000, function() {
  console.log('running on port 3000')
})
