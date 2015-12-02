var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("DisctinctUntilChanged function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,1,2,3,3,3,3,2,3];
	});
	
	it("should return only the unique values in a row", function(){
		var results = (Slack.from(data)
							.distinctUntilChanged(function(v){ 
								return v;
							})
							.toArray());
							
		expect(results[0]).equal(1);
		expect(results[1]).equal(2);
		expect(results[2]).equal(3);
		expect(results[3]).equal(2);
		expect(results[4]).equal(3);
	});
	
	it("should have the correct count", function(){
		var results = (Slack.from(data)
							.distinctUntilChanged(function(v){ 
								return v;
							})
							.toArray());

		expect(results.length).equal(5);
	});
});