var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Disctinct function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,1,2,3,3,3,3,2,3];
	});
	
	it("should return only the unique values", function(){
		var results = (Slack.from(data)
							.distinct(function(v){ 
								return v;
							})
							.toArray());
							
		expect(results[0]).equal(1);
		expect(results[1]).equal(2);
		expect(results[2]).equal(3);
	});
	
	it("should have the correct count", function(){
		var results = (Slack.from(data)
							.distinct(function(v){ 
								return v;
							})
							.toArray());

		expect(results.length).equal(3);
	});
});