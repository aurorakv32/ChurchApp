'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Volunteer Schema
 */
var VolunteerSchema = new Schema({
  title: {
    type: String,
    default: '',
    required: 'Please enter a title',
    trim: true
  },
  description: {
    type: String,
    default: '',
    required: 'Please enter a description of your volunteer event',
    trim: true
  },
  eventLeader: {
    type: String,
    default: '',
    required: 'Please enter the event leader name',
    trim: true
  },
  location: {
    type: String,
    default: '',
    required: 'Please enter the address of the event',
    trim: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  numberNeeded: {
    type: Number,
    default: 1
  },
  volunteers: [
  {user: Schema.ObjectId}
  ],
  isActive: {
    type: Boolean,
    default: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Volunteer', VolunteerSchema);
