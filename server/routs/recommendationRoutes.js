const express = require('express')
const {createRecommendations, getRecommendations } = require('../controllers/recommendationsControllers')

const router = express.Router()

router.get('/recommendations', getRecommendations)

router.post('/recommendations', createRecommendations)

module.exports = router