const express = require('express')
const {getSavedPosts, createSavedPosts, deleteSavedPost, getSavedPost} = require('../controllers/savedPosts')

const router = express.Router()

router.get('/savePost', getSavedPosts)

router.get('/:id', getSavedPost)

router.post('/savedPost', createSavedPosts)

router.delete('/:id', deleteSavedPost)

module.exports = router