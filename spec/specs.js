describe('coinCombo', function() {
  it("returns 1 quarter if user input is 25", function() {
    expect(coinCombo(25)).to.eql([1, 0, 0, 0]);
  });

  it("returns 1 quarter and 1 dime if user input is 35", function() {
    expect(coinCombo(35)).to.eql([1,1,0,0]);
  });
});
