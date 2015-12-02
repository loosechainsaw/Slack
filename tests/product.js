var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Product function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3,4];
	});
	
	it("should return the product of the values", function(){
		var result = (Slack.from(data)
							.product());
							
		expect(result).equal(24);
	});
	
});