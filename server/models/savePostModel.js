const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const savedPosts = new Schema({
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
      },
      _id: {
        type: String,
        required: false
      }
    }
  ],
  savePostFlag: {
    type: Boolean,
    required: true
  },
  _id: {
  type: String,
    required: true
  },
})

module.exports = mongoose.model('SavedPosts', savedPosts, 'savedPosts')
