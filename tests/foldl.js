var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Foldl function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3];
	});
	
	it("should return the reduction of the values", function(){
		var result = (Slack.from(data)
							.foldl(function(a, b){
								return a + b;
							},0));
							
		expect(result).equal(6);
	});
	
});