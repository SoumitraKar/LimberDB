'use strict';


var mongoose = require('mongoose'),
  Project = mongoose.model('Project'),
  user = require('../controllers/userController');

  exports.get_all_project = function(req, res) {
    Project.find({}, function(err, project) {
      if (err)
        res.send(err);
      res.json(project);
    })
  };

  exports.get_project_details_by_name = function(req, res) {
    console.log(req.body);
    Project.find({name : req.body.name}, function(err, project) {
      if (err)
        res.send(err);
      res.json(project);
    })
    .populate("ScrumMaster", "first_name last_name initials email_id")
    .populate("memberList", "first_name last_name initials email_id")
  };

  exports.get_project_details_by_user = function(req, res) {
    console.log(req.body);
    Project.find({ $or: [ {memberList : req.body.user_id}, {ScrumMaster : req.body.user_id} ] },
                function(err, project) {
                if (err)
                  res.send(err);
                res.json(project);
    })
    .populate("ScrumMaster", "first_name last_name initials email_id")
    .populate("memberList", "first_name last_name initials email_id")
  };

  exports.add_project = function(req, res) {
    var new_project = new Project(req.body);
    //set initials
    console.log(new_project);
    console.log(JSON.stringify(new_project));
    new_project.save(function(err, project) {
      console.log(err);
      console.log("\n\n\n");
        console.log(project);
      if (err)
        res.send(err);
      res.json(project);
    });
  };

  exports.add_user_to_project = function(req, res) {
    Project.findByIdAndUpdate(req.body.project_id, {
    $push: {
      memberList: req.body.user_id
    },
  }, {
    new: true
  }, function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  })
  };

  exports.delete_a_project = function(req, res) {
    Project.remove({
      _id: req.body.project_id
    }, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'Project successfully deleted' });
    });
  };
