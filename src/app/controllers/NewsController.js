
class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    // [GET] /news:lag
    show(req, res) {
        res.send('News DETAIL!!!!!')
    }
}

module.exports = new NewsController