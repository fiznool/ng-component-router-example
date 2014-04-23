// Using Rails-like standard naming convention for endpoints.
// GET     /workflows              ->  index
// POST    /workflows              ->  create
// GET     /workflows/:id          ->  show
// PUT     /workflows/:id          ->  update
// DELETE  /workflows/:id          ->  destroy

'use strict';

var Thing = require('./thing.model');

var handleError = function(res, err) {
  return res.send(500, err);
};

/**
 * Get list of workflows
 */
exports.index = function(req, res) {
  return Thing.find(function (err, workflows) {
    if(err) { return handleError(res, err); }
    return res.json(200, workflows);
  });
};

/**
 * Get a single workflow
 */
exports.show = function(req, res) {
  return Thing.findById(req.params.id, function (err, workflow) {
    if(err) { return handleError(res, err); }
    if(!workflow) { return res.send(404); }
    return res.json(workflow);
  });
};

/**
 * Creates a new workflow in the DB.
 */
exports.create = function(req, res) {
  return Thing.create(req.body, function(err, workflow) {
    if(err) { return handleError(res, err); }
    return res.json(201, workflow);
  });
};

/**
 * Updates an existing workflow in the DB.
 */
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; } // Prevent mongo 'Mod on _id not allowed' error
  Thing.findByIdAndUpdate(req.params.id, req.body, function(err, workflow) {
    if(err) { return handleError(res, err); }
    return res.json(200, workflow);
  });
};

/**
 * Deletes a workflow from the DB.
 */
exports.destroy = function(req, res) {
  Thing.findByIdAndRemove(req.params.id, function(err, workflow) {
    if(err) { return handleError(res, err); }
    return res.send(204);
  });
};