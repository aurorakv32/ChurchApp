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
    required: 'Please enter an event name',
    trim: true
  },
  eventLeader: {
    type: String,
    default: '',
    required: 'Please enter the event leader name',
    trim: true
  },
  description: {
    type: String,
    default: '',
    required: 'Please enter a description of your volunteer event',
    trim: true
  },
  location: {
    type: String,
    default: 'Rock Point Church',
    trim: true
  },  
  when: {
    type: Date
  },  
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
    //Tie in user to update correctly on view-volunteer.client.view.html
  }
});

mongoose.model('Volunteer', VolunteerSchema);
