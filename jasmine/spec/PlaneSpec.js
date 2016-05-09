'use strict';

describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it("should respond isLanded", function() {
    expect(plane.isLanded).not.toBeUndefined();
  });

  it("plane landed status is true after landing", function() {
    expect(plane.land).not.toBeUndefined();
  });

  it("plane landed status is true after landing", function() {
    plane.land()
    expect(plane.isLanded).toBe(true);
  });
});