var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("LastOrElse function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [];
	});
	
	it("should return the default item", function(){
		var result = (Slack.from(data)
							.lastOrElse(-1));
							
		expect(result).equal(-1);
	});
	
});