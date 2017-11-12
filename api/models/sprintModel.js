'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  user = require('./userModel'),
  project = require('./projectModel');

var labelSchema = new Schema({
  text: String,
  colorCode: String,
  colorName:String
});
var SprintSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter project name'
  },
  description: String,
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    required: 'Please enter end date'
  },
  labels: [labelSchema],
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: 'Please enter Project'
  },
  release: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: 'Please enter Project'
  }
});

module.exports = mongoose.model('Sprint', SprintSchema, "Sprints");
