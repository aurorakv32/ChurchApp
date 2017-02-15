'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Group Schema
 */
var GroupSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please enter the group leader name',
    trim: true
  },
  members: {
    type: String,
    required: 'Please enter at least one group member name'
  },
  location: {
    type: String,
    default: 'Rock Point Church'
  },
  when: {
    type: String,
    default: 'Sundays at 5PM'
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

mongoose.model('Group', GroupSchema);
