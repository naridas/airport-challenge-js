"use strict";
function Plane() {

  // var landed = true;
}

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
};

