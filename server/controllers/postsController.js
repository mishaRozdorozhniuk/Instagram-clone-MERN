const Posts = require("../models/postsModel");
const mongoose = require("mongoose");

const getPosts = async (req, res) => {
  const posts = await Posts.find({}).sort({createdAt: -1})

  res.status(200).json(posts)
}

const createPost = async (req, res) => {
  const {
    nickName,
    subtitle,
    countOfLikes,
    photoDescription,
    dateOfPost,
    photoOfPost,
    comment } = req.body

  try {
    const posts = await Posts.create({nickName, subtitle, countOfLikes, photoDescription, dateOfPost, photoOfPost, comment})
    res.status(200).json(posts)

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const updatePost = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such posts'})
  }

  const posts = await Posts.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!posts) {
    return res.status(400).json({ error: 'no such single post' })
  }

  res.status(200).json(posts)
}

module.exports = {
  getPosts,
  createPost,
  updatePost
}