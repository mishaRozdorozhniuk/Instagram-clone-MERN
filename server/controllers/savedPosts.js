const SavedPosts = require("../models/savePostModel");
const mongoose = require("mongoose");

const getSavedPosts = async (req, res) => {
  const savedPosts = await SavedPosts.find({}).sort({createdAt: -1})

  res.status(200).json(savedPosts)
}

const getSavedPost = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const savedPost = await SavedPosts.findById(id)

  if (!savedPost) {
    return res.status(404).json({ error: 'no such single workout' })
  }

  res.status(200).json(savedPost)
}

const createSavedPosts = async (req, res) => {
  const {
    nickName,
    subtitle,
    countOfLikes,
    photoDescription,
    dateOfPost,
    photoOfPost,
    comment,
    savePostFlag,
    _id
  } = req.body

  try {
    const savedPostsResponse = await SavedPosts.create({
      nickName,
      subtitle,
      countOfLikes,
      photoDescription,
      dateOfPost,
      photoOfPost,
      comment,
      savePostFlag,
      _id
    })

    res.status(200).json(savedPostsResponse)

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const deleteSavedPost = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const savedPost = await SavedPosts.findOneAndDelete({_id: id})

  if (!savedPost) {
    return res.status(400).json({ error: 'no such single workout' })
  }

  res.status(200).json(savedPost)
}


module.exports = {
  getSavedPosts,
  createSavedPosts,
  deleteSavedPost,
  getSavedPost
}