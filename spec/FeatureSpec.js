// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to land at
//   an airport and confirm that it has landed

'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
  it('planes can be instructed to take off from airport', function(){
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.planes()).toEqual([]);
    // expect(airport.planes()).not.toContain(plane);
  });
});

// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plan to take off from
//   an airport and confirm that it is no longer in the airport
