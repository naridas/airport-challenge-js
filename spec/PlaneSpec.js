"use strict";

describe("Plane", function(){
  var plane;
  var airport;
  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
  });

  it('responds to land',function () {
    expect(plane.land).not.toBeUndefined();
  });

  it('can land at an airport',function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can takes off from an airport',function() {
    plane.takeOff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
  });

});
