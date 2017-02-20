'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Member Schema
 */
var MemberSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please enter a member name',
    trim: true
  },
  spouseName: {
    type: String,
    default: 'No Spouse',
    trim: true
  },
  kidsNames: {
    type: String,
    default: 'N/A',
    trim: true
  },
  // kidsAge: {
  //   type: Number,
  //   required: 'Please enter an age',
  //   trim: true
  // },
  becameMember: {
    type: Date,
    default: Date.now,
    trim: true
  },
  group: {
    type: String,
    default: 'None'
  },
  created: {
    type: Date,
    default: Date.now,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Member', MemberSchema);

