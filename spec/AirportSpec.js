'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    spyOn(Math,'random').and.returnValue(0);
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for take off', function(){
    spyOn(Math,'random').and.returnValue(0);
    airport.clearForLanding(plane)
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });
  it('can clear planes for take off', function(){
    spyOn(Math,'random').and.returnValue(0);
    airport.clearForLanding(plane)
    airport.clearForLanding(plane)
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  describe('under normal conditions',function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });
    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
    it('can clear planes for takeoff', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('under stormy conditions',function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(1);
    });
    it('does not clear planes for landing', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
    it('does not clear planes for takeoff', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });


  // it('can check for stormy conditions', function(){
  //     expect(airport.isStormy()).toBeFalsy();
  // });
  //
  // describe('under stormy conditions',function(){
  //   it('does not clear planes for takeoff', function(){
  //     spyOn(airport,'isStormy').and.returnValue(true);
  //     expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
  //   });
  // });

});
