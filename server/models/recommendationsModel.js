const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const recommendationSchema = new Schema({
  nickName: {
    type: String,
    required: true
  },
  additionalRecommendInfo: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Recommendation', recommendationSchema, 'recommendations')
