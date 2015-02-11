describe('coinCombo', function() {
  it("returns 1 quarter if user input is 25", function() {
    expect(coinCombo(25)).to.eql([1, 0, 0, 0]);
  });

  it("returns 1 quarter and 1 dime if user input is 35", function() {
    expect(coinCombo(35)).to.eql([1,1,0,0]);
  });

  it("returns 1 quarter, 1 dime, and 1 nickel if user input is 40", function() {
    expect(coinCombo(40)).to.eql([1,1,1,0]);
  });

  it("returns 1 quarter, 1 dime, 1 nickle, 1 penny if user input is 41", function(){
    expect(coinCombo(41)).to.eql([1,1,1,1]);
  });

  it("returns 1 dime if user input is 10", function() {
    expect(coinCombo(10)).to.eql([0,1,0,0]);
  });

  it("returns 1 nickel if user input is 5", function() {
    expect(coinCombo(5)).to.eql([0,0,1,0]);
  });

  it("returns the correct change combination if user input is 532", function() {
    expect(coinCombo(532)).to.eql([21, 0, 1, 2]);
  });

  it("returns zero change if user input is zero", function() {
    expect(coinCombo(0)).to.eql([0,0,0,0]);
  });
});
