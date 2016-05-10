"use strict";
function Plane() {
  // this._location = "";

  // var landed = true;
}

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
  this._location = airport;
};

Plane.prototype.takeOff = function(){
  this._location.clearForTakeOff(this);
  // airport.clearForTakeOff(this);
  // this._location = '';
};
