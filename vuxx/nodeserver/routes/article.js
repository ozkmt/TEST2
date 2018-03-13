var express = require('express');
var router = express.Router();
var Model = require('../modle/model')
const fn = ()=> {}
var responseData;
router.use(function(req, res, next) {
	responseData = {
		code: 0,
		message: ''
	}
	next();
})
var date = new Date(),
	yy = date.getFullYear(),
	MM = date.getMonth() + 1,
	dd = date.getDate(),
	hh = date.getHours(),
	mm = date.getMinutes(),
	ss = date.getSeconds();
router.get('/aa', function(req, res, next) {
	res.send('data');
})
//发布内容
router.get('/getArticle', (req, res)=> {
  const _id = req.query.id
  db.Article.findOne({_id}, (err, doc)=> {
    if (err) {
      console.log(err)
    } else if (doc) {
      res.send(doc)
    }
  })
})

router.get('/getArticles', (req, res)=> {
  db.Article.find(null, 'title date content', (err, doc) => {
    if (err) {
      console.log(err)
    } else if (doc) {
      res.send(JSON.stringify(doc))
    }
  })
})

router.post('/saveArticle', (req, res)=> {
  const id = req.body._id
  const article = {
    title: req.body.title,
    date: req.body.date,
    content: req.body.content
  }
  if (id) {
    db.Article.findByIdAndUpdate(id, article, fn)
  } else {
    new db.Article(article).save()
  }
  res.status(200).end()
})

module.exports = router;