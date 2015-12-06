var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Take function tests", function(){
	
	var data = null;
	
	beforeEach(function(){
		data = [1,2,3,4,5,6];
	});
	
	it("should take n items as the new stream", function(){
		var results = (Slack.from(data)
							.take(3)
							.toArray());
							
		expect(results[0]).equal(1);
		expect(results[1]).equal(2);
		expect(results[2]).equal(3);
	});
	
	it("should have the correct count", function(){
		var results = (Slack.from(data)
							.take(3)
							.toArray());
							
		expect(results.length).equal(3);
	});
});