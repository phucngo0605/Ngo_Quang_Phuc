const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment: String,
  date_time: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;