var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Size function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3];
	});
	
	it("should return the correct number of elements", function(){
		var size = (Slack.from(data)
							.size());
							
		expect(size).equal(3);
	});
	
});