const { response } = require('express')
const Course = require('../models/Courses')

class siteController {

    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('me/stored-courses', {courses}))
            .catch(next)
    }
}

module.exports = new siteController