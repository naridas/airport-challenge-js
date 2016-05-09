'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be landed by airport', function() {
    airport.clearanceLand(plane)
    expect(airport.planes()).toContain(plane);
  });

  it('planes can take-off from airport', function() {
    airport.clearanceLand(plane)
    airport.clearanceTakeOff(plane)
    expect(airport.planes).not.toContain(plane)
  });
});
