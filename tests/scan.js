var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Scan function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3];
	});
	
	it("should return the reduction of the values as a running value", function(){
		var results = (Slack.from(data)
							.scan(function(a, b){
								return a + b;
							},0)
							.toArray());
							
		expect(results[0]).equal(1);
		expect(results[1]).equal(3);
		expect(results[2]).equal(6);
	});
	
	it("should return the correct number of elements in the result", function(){
		var results = (Slack.from(data)
							.scan(function(a, b){
								return a + b;
							},0)
							.toArray());
							
		expect(results.length).equal(3);
	});
	
});