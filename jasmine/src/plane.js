'use strict';

function Plane() {
  this.maxCapacity = 20;
  this.isLanded = false;
}

Plane.prototype.land = function(airport) {
  this.isLanded = true;
};

Plane.prototype.takeOff = function(airport) {
  this.isLanded = false;
};