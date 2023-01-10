const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const postModel = new Schema({
  nickName: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  countOfLikes: {
    type: Number,
    required: true
  },
  photoDescription: {
    type: String,
    required: true
  },
  dateOfPost: {
    type: String,
    required: true
  },
  photoOfPost: {
    type: String,
    required: true
  },
  comment: [
    {
      senderName: {
        type: String,
        required: true
      },
      senderCommentText: {
        type: String,
        required: true
      }
    }
  ],
  savePostFlag: {
    type: Boolean,
    required: false
  }
})

module.exports = mongoose.model('Posts', postModel, 'posts')