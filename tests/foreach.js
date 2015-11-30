var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Foreach function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3];
	});
	
	it("should traverse each element in lazy source", function(){
		var results = [];
		(Slack.from(data)
			  .map(function(v){ 
					return v * 2;
			   })
			   .foreach(function(e){
				   results.push(e);
			   }));
							
		expect(results[0]).equal(2);
		expect(results[1]).equal(4);
		expect(results[2]).equal(6);
	});
	
	it("should traverse the correct number of items", function(){
		var results = [];
		(Slack.from(data)
			  .map(function(v){ 
					return v * 2;
			   })
			   .foreach(function(e){
				   results.push(e);
			   }));
							
		expect(results.length).equal(3);
	});
	
});