var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("First function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3];
	});
	
	it("should return the first item", function(){
		var result = (Slack.from(data)
							.first());
							
		expect(result).equal(1);
	});
	
});