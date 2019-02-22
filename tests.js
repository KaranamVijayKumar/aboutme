  function area(x) {
    return x * x ;
  }
//Added QUnit Test
  QUnit.test("Area", function(assert) {
	assert.equal(area(3), 9, "SideLength 3 should give Area as 9");
	assert.equal(area(2), 4, "SideLength 2 should give Area as 4");
	assert.equal(area(50), 2500, "SideLength 50 should give Area as 250");
	assert.equal(area(8), 64,"SideLength 8 should give Area as 64");
	assert.equal(area(15), 225, "SideLength 15 should give Area as 225");
 });