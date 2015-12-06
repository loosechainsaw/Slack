var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Avg function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [0, 20, 50,30];
	});
	
	it("should return the avg of the values", function(){
		var result = (Slack.from(data)
							.avg());
							
		expect(result).equal(25);
	});
	
});