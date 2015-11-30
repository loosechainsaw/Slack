var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Minimum function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3];
	});
	
	it("should return the smallest item", function(){
		var element = (Slack.from(data)
							.minimum(function(v){
								return v;
							}).value());
							
		expect(element).equal(1);
	});
	
});