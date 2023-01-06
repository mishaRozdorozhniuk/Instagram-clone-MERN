const express = require('express')
const { getPosts, createPost, updatePost, getPost } = require('../controllers/postsController')

const router = express.Router()

router.get('/posts', getPosts)

router.get('/:id', getPost)

router.post('/posts', createPost)

router.patch('/:id', updatePost)

module.exports = router