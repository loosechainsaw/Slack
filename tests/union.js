var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Take function tests", function(){
	
	var data = null;
	
	beforeEach(function(){
		data = [1,1,2,3,3,2];
	});
	
	it("should combine both streams together whilst removing duplicates", function(){
		var results = (Slack.from(data)
							.union( [3,3,3,1,2,1,4,5])
							.toArray());
							
		expect(results[0]).equal(1);
		expect(results[1]).equal(2);
		expect(results[2]).equal(3);
		expect(results[3]).equal(4);
		expect(results[4]).equal(5);
	});
	
	it("should have the correct count", function(){
		var results = (Slack.from(data)
							.union( [3,3,3,1,2,1,4,5])
							.toArray());
							
		expect(results.length).equal(5);
	});
});