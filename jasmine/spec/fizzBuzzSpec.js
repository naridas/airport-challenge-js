describe("Player", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  });

  it("return fizz if divisable by 3", function() {
    expect(fizzbuzz.play(3)).toEqual('fizz');
  });
  it("return fizz if divisable by 3", function() {
    expect(fizzbuzz.play(5)).toEqual('fizz');
  });
  it("return fizz if divisable by 3", function() {
    expect(fizzbuzz.play(15)).toEqual('fizz');
  });
  it("return fizz if divisable by 3", function() {
    expect(fizzbuzz.play(4)).toEqual(4);
  });
});
