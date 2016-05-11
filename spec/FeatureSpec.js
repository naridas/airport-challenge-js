// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to land at
//   an airport and confirm that it has landed

'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport(weather);
  });

  describe('in good weather conditions, ', function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });

    it('planes can be instructed to land at an airport', function(){
      // spyOn(Math,'random').and.returnValue(0);
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instructed to take off from airport', function(){
      // spyOn(Math,'random').and.returnValue(0);
      plane.land(airport);
      plane.takeOff(airport);
      expect(airport.planes()).toEqual([]);
      // expect(airport.planes()).not.toContain(plane);
    });

    it('blocks takeoff when weather is stormy', function(){
      // spyOn(Math,'random').and.returnValue(0);
      plane.land(airport)
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeOff();}).toThrowError('cannot takeoff during storm');
      expect(airport.planes()).toContain(plane);
    });
  });

  it('blocks landing when weather is stormy', function(){
    spyOn(Math,'random').and.returnValue(1);
    expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
    expect(airport.planes()).toEqual([]);
  });

});
