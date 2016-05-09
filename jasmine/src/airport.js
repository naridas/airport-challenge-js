'use strict';

function Airport() {
  this._hanger = [];
};

Airport.prototype.planes = function() {
  return this._hanger;
};

Airport.prototype.clearanceLand = function(plane) {
  plane.land()
  this._hanger.push(plane)
};

Airport.prototype.clearanceTakeOff = function(plane) {
  plane.takeOff()
  this._hanger.pop(plane)
};
