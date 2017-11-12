'use strict';
var mongoose = require('mongoose'),
    Story = mongoose.model('Story'),
    project = require('../controllers/projectController'),
    user = require('../controllers/userController'),
    sprint = require('../controllers/sprintController');

    exports.add_story = function(req, res) {
      var new_story = new Story(req.body);
      console.log(new_story);
      console.log(JSON.stringify(new_story));
      new_story.save(function(err, story) {
        console.log(err);
        console.log("\n\n\n");
          console.log(story);
        if (err)
          res.send(err);
        res.json(story);
      });
    };

    exports.update_story = function(req, res) {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      console.log(req.body);
      Story.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, function(err, story) {
        if (err)
          res.send(err);
        res.json(story);
      });
    };
    exports.get_all_story = function(req, res) {
      Story.find({}, function(err, story) {
        if (err)
          res.send(err);
        res.json(story);
      })
      .populate("project", "name ScrumMaster initials email_id")
    };

    exports.delete_story = function(req, res) {
      Story.remove({
        _id: req.body.id
      }, function(err, story) {
        if (err)
          res.send(err);
        res.json({ message: 'Story successfully deleted' });
      });
    };

    exports.get_story_by_assignee = function(req, res) {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      console.log(req.body);
      Story.find({ $or: [ {reporter : req.body.user_id}, {assignees : req.body.user_id} ] },
        function(err, story) {
        if (err)
          res.send(err);
        res.json(story);
      })
    };
