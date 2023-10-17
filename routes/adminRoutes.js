const express = require('express')

const admin = require('../controller/adminController')

const route = express.Router()

route.get('/admin', admin.adminPanel)

route.post('/admin/insert-data', admin.insertData)

route.post('/admin/get-one-blog', admin.getOne)

route.post('/admin/update-data', admin.getOne)

module.exports = route