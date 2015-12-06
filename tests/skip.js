var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Skip function tests", function(){
	
	var data = null;
	
	beforeEach(function(){
		data = [1,2,3,4,5,6];
	});
	
	it("should skip n items as the new stream", function(){
		var results = (Slack.from(data)
							.skip(3)
							.toArray());
							
		expect(results[0]).equal(4);
		expect(results[1]).equal(5);
		expect(results[2]).equal(6);
	});
	
	it("should have the correct count", function(){
		var results = (Slack.from(data)
							.skip(3)
							.toArray());
							
		expect(results.length).equal(3);
	});
});