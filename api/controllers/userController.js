'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  project = require('../controllers/projectController');

exports.list_all_users = function(req, res) {
  user.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.add_project_to_user = function(req, res) {
  var new_user = new User(req.body);
  console.log("\n\n\n\n\n\n\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n\n\n\n\n\n\n\n");
  User.findByIdAndUpdate(req.body.user_id, {
  $push: {
    projects: req.body.project_id
  },
}, {
  new: true
}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
})
};


exports.add_an_user = function(req, res) {
  var new_user = new User(req.body);
  //set initials
  console.log(new_user);
  var initials = new_user.first_name.charAt(0) + new_user.last_name.charAt(0);
  new_user.initials = initials;
  console.log(JSON.stringify(new_user));
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.get_user_details_by_email = function(req, res) {
  console.log("\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n\n");
  console.log(req.body);
  User.find({email_id : req.body.email_id}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  })
  .populate("projects", "name date ScrumMaster memberList release");
};

exports.get_all_users = function(req, res) {
  console.log("\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n\n");
  console.log(req.body);
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  })
  .populate("projects", "name date ScrumMaster memberList release");
};


exports.update_an_user = function(req, res) {
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(req.body);
  User.findOneAndUpdate({email_id: req.body.email_id}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_an_user = function(req, res) {
  User.remove({
    email_id: req.body.email_id
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'user successfully deleted' });
  });
};
