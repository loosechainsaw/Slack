var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Last function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3];
	});
	
	it("should return the last item", function(){
		var result = (Slack.from(data)
							.last());
							
		expect(result).equal(3);
	});
	
});