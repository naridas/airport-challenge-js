describe("FizzBuzz", function(){
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("3 will return fizz", function () {
    expect(fizzBuzz.play(3)).toEqual("fizz")
  });

  it("5 will return buzz", function () {
    expect(fizzBuzz.play(5)).toEqual("buzz")
  });

  it("if not divisible by 3 and 5 returns number",function () {
    expect(fizzBuzz.play(8)).toEqual(8)
  });

  it("will return fizzbuzz when divisible by 3 and 5", function () {
    expect(fizzBuzz.play(15)).toEqual("fizzbuzz")
  });
});