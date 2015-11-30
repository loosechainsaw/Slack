var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Filter function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3];
	});
	
	it("should return the correct subset of data", function(){
		var results = (Slack.from(data)
							.filter(function(v){ 
								return v <= 2;
							})
							.toArray());
							
		expect(results[0]).equal(1);
		expect(results[1]).equal(2);
	});
	
	it("should return the correct count of items", function(){
		var results = (Slack.from(data)
							.filter(function(v){ 
								return v <= 2;
							})
							.toArray());
							
		expect(results.length).equal(2);
	});
});