const { response } = require('express')
const Course = require('../models/Courses')

class siteController {

    // [GET] /
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('home', {courses}))
            .catch(next)

        // res.render('home')
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new siteController