var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    category: String,
    title: String,
    content: String
  },
  {
      timestamps: true
      //时间戳
    }
)

module.exports = mongoose.model('Post', PostSchema);
