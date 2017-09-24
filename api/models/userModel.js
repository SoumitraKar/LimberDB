'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    project = require('./projectModel');
var UserSchema = new Schema({
  first_name: {
    type: String,
    required: 'Please enter first name'
  },
  middle_name: String,
  last_name: {
    type: String,
    required: 'Please enter last name'
  },
  email_id: {
    type: String,
    unique: true,
    required: 'Please Enter Email Id'
  },
  initials: {
    type: String,
    required: 'Please Enter Initials'
  },
  image:String,
  show_offline: {
    type: Boolean,
    default: [false]
  },
  projects: [{
      type: Schema.Types.ObjectId,
      ref: 'Project'
    }
  ],
  stories: [{
      type: Schema.Types.ObjectId,
      ref: 'Story'
    }],
  tasks: [{
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }],
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  }
});

module.exports = mongoose.model('User', UserSchema, "Users");
