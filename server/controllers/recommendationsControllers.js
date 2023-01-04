const Recommendation = require("../models/recommendationsModel");

const getRecommendations = async (req, res) => {
  const recommendation = await Recommendation.find({}).sort({createdAt: -1})

  res.status(200).json(recommendation)
}


const createRecommendations = async (req, res) => {
  const { nickName, additionalRecommendInfo } = req.body

  try {
    const recommendation = await Recommendation.create({nickName, additionalRecommendInfo})
    res.status(200).json(recommendation)

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  createRecommendations,
  getRecommendations
}