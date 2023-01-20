require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routs/workouts')
const recommendationRoutes = require('./routs/recommendationRoutes')
const postsRoutes = require('./routs/posts')
const savedPostRoutes = require('./routs/savedPosts')
const profilePostsRoutes = require('./routs/profilePost')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  next()
})

app.use('/api/workouts', workoutRoutes)
app.use('/rec', recommendationRoutes)
app.use('/posts', postsRoutes)
app.use('/savedPosts', savedPostRoutes)
app.use('/profilePosts', profilePostsRoutes)

// connect to mongo
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
    })
  })
  .catch((error) => {
    console.log(error);
  })
