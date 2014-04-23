'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Thing Schema
 */
var ThingSchema = new Schema({
  name: String,
  active: Boolean,
  services: Number
});

module.exports = mongoose.model('Thing', ThingSchema);
