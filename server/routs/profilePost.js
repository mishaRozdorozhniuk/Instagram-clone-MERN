const express = require('express')
const {getProfilePosts, createProfilePosts, updateProfilePost} = require('../controllers/profilePostsController')

const router = express.Router()

router.get('/', getProfilePosts)

router.post('/profilePosts', createProfilePosts)

router.patch('/:id', updateProfilePost)

module.exports = router