describe("Plane", function(){
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("responds to landed", function () {
    // ? is not working on the expect or other lines
    expect(plane.land).not.toBeUndefined()
  });

  it("when instructed to land, it is landed", function () {
    // plane.wedassadfae
    expect(plane.landed).toBeTruthy()
  });

  it("when instructed to takeoff landed is false", function () {
    plane.takeoff
    expect(plane.landed).toBeFalsy()
  });


});