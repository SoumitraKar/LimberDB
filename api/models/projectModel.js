'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  user = require('./userModel'),
  sprint = require('./sprintModel');
var ReleaseSchema = new Schema({
  name: String,
  description: String,
  creationDate: {
    type: Date,
    default: Date.now
  },
  releaseDate: Date
});

var ProjectSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter project name'
  },
  description: String,
  date: {
    type: Date,
    default: Date.now
  },
  ScrumMaster: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: 'Please enter ScrumMaster'
  },
  memberList: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true
  }],
  release: [ReleaseSchema]
});

module.exports = mongoose.model('Project', ProjectSchema, "Projects");
