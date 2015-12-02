var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Range function tests", function(){

	it("should return the correct data", function(){
		var results = (Slack.range(0,2).toArray());
							
		expect(results[0]).equal(0);
		expect(results[1]).equal(1);
		expect(results[2]).equal(2);
	});
	
	it("should return the correct count", function(){
		var results = (Slack.range(0,2).toArray());
							
		expect(results.length).equal(3);
	});
});