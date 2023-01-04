const express = require('express')
const {getPosts, createPost, updatePost } = require('../controllers/postsController')

const router = express.Router()

router.get('/posts', getPosts)

router.post('/posts', createPost)

router.patch('/:id', updatePost)

module.exports = router