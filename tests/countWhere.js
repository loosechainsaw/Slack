var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Count Where function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3];
	});
	
	it("should return the correct number of elements", function(){
		var size = (Slack.from(data)
							.countWhere(function(v){
								return v < 4;
							}));
							
		expect(size).equal(3);
	});
	
});