const express = require('express')
const userRouter = express.Router()
const moment = require('moment')


const {
    getUsers,
    addUser,
    getUserById,
    delUserById,
    updateUserById,
} = require('../service/userService')

// middleware that is specific to this router
userRouter.use(function timeLog (req, res, next) {
  console.log('user-router-time: ', moment().format('YYYY-MM-DD HH:MM:ss'))
  next()
})

// define the home page route
userRouter.route('/:id')
    .get(getUserById)
    .delete(delUserById)
    .put(updateUserById)
userRouter.route('/')
    .get(getUsers)
    .post(addUser)
module.exports = userRouter