var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Catch function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [ function(){
			return 1;
		},function(){
			return 2;
		},function(){
			throw new Error("Badness");
		} ];
	});
	
	it("should return the second set of the values after failure", function(){
		var results = (Slack.from(data)
							.map(function(f){
								return f();
							})
							.catch(Slack.from([4,5,6]))
							.toArray());
		
		expect(results[0]).equal(1);
		expect(results[1]).equal(2);					
		expect(results[2]).equal(4);
		expect(results[3]).equal(5);
		expect(results[4]).equal(6);
	});
	
	it("should have the correct count of values", function(){
		var results = (Slack.from(data)
							.map(function(f){
								return f();
							})
							.catch(Slack.from([4,5,6]))
							.toArray());
		
		expect(results.length).equal(5);
	});
});