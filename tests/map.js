var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Map function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3];
	});
	
	it("should multiply the numbers by 2", function(){
		var results = (Slack.from(data)
							.map(function(v){ 
								return v * 2;
							})
							.toArray());
							
		expect(results[0]).equal(2);
		expect(results[1]).equal(4);
		expect(results[2]).equal(6);
	});
	
});