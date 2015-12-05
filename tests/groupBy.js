var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Foldl function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3,11,12,13];
	});
	
	it("should return the data grouped", function(){
		var results = (Slack.from(data)
							.groupBy(function(v){
								return v % 10;
							}).toArray());
		
		expect(results[0].key).equal(1);			
		expect(results[0].elements[0]).equal(1);			
		expect(results[0].elements[1]).equal(11);	
		
		expect(results[1].key).equal(2);			
		expect(results[1].elements[0]).equal(2);			
		expect(results[1].elements[1]).equal(12);
		
		expect(results[2].key).equal(3);			
		expect(results[2].elements[0]).equal(3);			
		expect(results[2].elements[1]).equal(13);
	});
	
});