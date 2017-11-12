'use strict';
var mongoose = require('mongoose'),
    Sprint = mongoose.model('Sprint'),
    project = require('../controllers/projectController'),
    user = require('../controllers/userController');;

    exports.add_sprint = function(req, res) {
      var new_sprint = new Sprint(req.body);
      console.log(new_sprint);
      console.log(JSON.stringify(new_sprint));
      new_sprint.save(function(err, sprint) {
        console.log(err);
        console.log("\n\n\n");
          console.log(sprint);
        if (err)
          res.send(err);
        res.json(sprint);
      });
    };

    exports.update_sprint = function(req, res) {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      console.log(req.body);
      Sprint.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, function(err, sprint) {
        if (err)
          res.send(err);
        res.json(sprint);
      });
    };
    exports.get_all_sprint = function(req, res) {
      Sprint.find({}, function(err, sprint) {
        if (err)
          res.send(err);
        res.json(sprint);
      })
      .populate("project", "name ScrumMaster initials email_id")
    };

    exports.delete_sprint = function(req, res) {
      Sprint.remove({
        _id: req.body.id
      }, function(err, sprint) {
        if (err)
          res.send(err);
        res.json({ message: 'Sprint successfully deleted' });
      });
    };

    exports.get_current_sprint_of_project = function(req, res) {
      Sprint.find({project : req.body.project_id,
        startDate : { $lt: new Date() },
        endDate : { $gt: new Date() }
      }, function(err, sprint) {
        if (err)
          res.send(err);
        res.json(sprint);
      })
      .populate("project", "name ScrumMaster memberList release")
    };
