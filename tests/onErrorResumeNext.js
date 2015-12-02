var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("OnErrorResumeNext function tests", function(){
	
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
	
	it("should return the values less the failures", function(){
		var results = (Slack.from(data)
							.map(function(f){
								return f();
							})
							.onErrorResumeNext()
							.toArray());
		
		expect(results[0]).equal(1);
		expect(results[1]).equal(2);					
	});
	
	it("should have the correct count of values", function(){
		var results = (Slack.from(data)
							.map(function(f){
								return f();
							})
							.onErrorResumeNext()
							.toArray());
		
		expect(results.length).equal(2);
	});
});