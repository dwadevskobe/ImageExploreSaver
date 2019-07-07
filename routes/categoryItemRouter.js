'use strict'

var express = require('express');
var CategoryItem = require('./model/categoryItem');

var categoryItemRouter = express.Router();

categoryItemRouter.get('/:categoryName', function(req, res) {
    CategoryItem.find({categoryName: req.params.categoryName}, function(err, categoryItems) {
      if (err)
        res.send(err);
      console.log("Calling Category Items Request");
      res.json(categoryItems)
    })
})
.post('/:categoryName', function(req, res) {
   var categoryItem = new CategoryItem();
   categoryItem.categoryName = req.params.categoryName;
  (req.body.imageUrl) ? categoryItem.imageUrl = req.body.imageUrl : null;

  categoryItem.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Category Item successfully added!' });
  })
})
.delete('/:categoryItemId',function(req, res) {
    CategoryItem.deleteOne({ _id: req.params.categoryItemId}, function(err, categoryItem) {
      console.log("Calling Delete Item");
      if (err)
        res.send(err);
      res.json({ message: 'Category has been deleted' })
    })
});

module.exports = categoryItemRouter;
