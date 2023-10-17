const express = require('express')

const  {blogContent, blogContentUsingId} = require('../controller/blogContent')

const route = express.Router()

route.get('/blog-content', blogContent)

route.get('/blog-content-id', blogContentUsingId)

module.exports = route