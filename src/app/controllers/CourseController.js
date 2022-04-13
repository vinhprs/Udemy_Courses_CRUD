const Course = require('../models/Courses')

class CourseController {

    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
        .then(course => {
            res.render('courses/show', { course })
        })
        .catch(next)
    }

    // [GET] /courses/create
    create(req, res, next) {
       res.render('courses/create')
    }

     // [POST] /courses/store
    store(req, res, next) {
        // res.json(req.body)

        // Save form data to DB
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.VideoID}/sddefault.jpg`
        formData.VideoID =`"https://www.youtube.com/embed/${req.body.VideoID}"`
        const course = new Course(formData)
        course.save()
            .then(() => {
                res.redirect(`/`)
            })
            .catch(error => {

            })
    }

    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(courses =>res.render('courses/edit', {courses}) )
            .catch(next)
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id }, req.body).lean()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    // [PUT] /courses/:id
    remove(req, res, next) {
        Course.deleteOne({_id: req.params.id}).lean()
            .then(() => res.redirect('back'))
            .catch(next)
    }
 
}

module.exports = new CourseController