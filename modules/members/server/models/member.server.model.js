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
    default: 'Single',
  },
  numKids: {
    type: Number,
    default: 0,
  },
  kidsNames: {
    type: String,
    default: 'None'
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Member', MemberSchema);
