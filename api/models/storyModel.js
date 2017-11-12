'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  user = require('./userModel'),
  project = require('./projectModel'),
  sprint = require('./sprintModel');

var subtaskSchema = new Schema({
  summary : {
    type: String,
    required: 'Please enter Summary'
  },
  key : {
    type: String,
    required: 'Please enter key'
  },
  description : String,
  estimate : Number,
  timeLogged : Number,
  creationDate : {
    type: Date,
    default: Date.now
  },
  updationDate : {
    type: Date,
    default: Date.now
  },
  assignee : {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dependentOn : [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  attachmentList: [{
    fileName: String,
    timeStamp: Date,
    attachmentType: String,
    addedByUserName: String,
    addedByUserId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    path: String
  }],
  status : { type: String, enum: ['OPEN', 'IN PROGRESS', 'RESOLVED'] }
});

var StorySchema = new Schema({
  summary : {
    type: String,
    required: 'Please enter story summary'
  },
  key : {
    type: String,
    required: 'Please enter key'
  },
  type : String,
  description : String,
  reporter : {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: 'Please enter reporter'
  },
  assignees : [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  points : Number,
  creationDate : {
    type: Date,
    default: Date.now
  },
  resolved: Boolean,
  lable: String,
  sprint : {
    type: Schema.Types.ObjectId,
    ref: 'Sprint'
  },
  project : {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: 'Please enter Project'
  },
  flagged : Boolean,
  labelList : [
    {
      name : String,
      colorCode : String
    }
  ],
  dependentOn : [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  attachmentList: [{
    fileName: String,
    timeStamp: Date,
    attachmentType: String,
    addedByUserName: String,
    addedByUserId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    path: String
  }],
  comments: [{
    text: String,
    commentedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    userName: String,
    commentedData: Date
  }],
  subtasks: [subtaskSchema]
});

module.exports = mongoose.model('Story', StorySchema, "Stories");
