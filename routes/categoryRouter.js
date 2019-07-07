'use strict'

var express = require('express');
var mongoose = require('mongoose');
var Category = require('./model/categories');
var categoryRouter = express.Router();

categoryRouter.get('/', function(req, res) {
    Category.find(function(err, categories) {
      if (err)
        res.send(err);
      res.json(categories)
    })
})
.post('/', function(req, res) {
    var category = new Category();
    (req.body.name) ? category.name = req.body.name : null;

    category.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Category successfully added!' })
    })
  })
  .delete('/:category_id',function(req, res) {
    Category.deleteOne({ _id: req.params.category_id}, function(err, category) {
      if (err)
        res.send(err);
      res.json({ message: 'Category has been deleted' })
    })
});

module.exports = categoryRouter;
