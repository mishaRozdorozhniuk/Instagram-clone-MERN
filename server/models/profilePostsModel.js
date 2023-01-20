const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const profilePosts = new Schema({
  id: {
    type: Number,
    required: true
  },
  postPhoto: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  comments: {
    type: Number,
    required: true
  },
  commentForCurrentPost: [
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
    required: true
  }
})

module.exports = mongoose.model('ProfilePosts', profilePosts, 'profilePosts')
