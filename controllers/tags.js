var express = require('express');
var db = require('../models');
var router = express.Router();

router.get("/", function(req,res){
    db.tag.findAll().then(function(tags){
        res.render("tags/tags", {tags: tags}); //foldertags/filetags
    });
});

router.get("/:id", function(req,res){
    db.tag.findOne({
      where: {id: req.params.id},
      include: [db.post]
    }).then(function(tag){
      res.render('tags/show', {tag: tag});
    });
})

module.exports = router;
