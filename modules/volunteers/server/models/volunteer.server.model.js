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
  
});

mongoose.model('Volunteer', VolunteerSchema);
