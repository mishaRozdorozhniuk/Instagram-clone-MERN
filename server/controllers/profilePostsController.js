const ProfilePosts = require("../models/profilePostsModel");
const mongoose = require("mongoose");

const getProfilePosts = async (req, res) => {
  const profilePosts = await ProfilePosts.find({}).sort({createdAt: -1})

  res.status(200).json(profilePosts)
}

const createProfilePosts = async (req, res) => {
  const {
    id,
    postPhoto,
    likes,
    comments,
    commentForCurrentPost,
    savePostFlag,
  } = req.body

  try {
    const profilePostsResponse = await ProfilePosts.create({
      id,
      postPhoto,
      likes,
      comments,
      commentForCurrentPost,
      savePostFlag,
    })

    res.status(200).json(profilePostsResponse)

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const updateProfilePost = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such posts'})
  }

  const profilePost = await ProfilePosts.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!profilePost) {
    return res.status(400).json({ error: 'no such single post' })
  }

  res.status(200).json(profilePost)
}


module.exports = {
  getProfilePosts,
  createProfilePosts,
  updateProfilePost
}