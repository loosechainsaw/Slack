var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Partition function tests", function(){
	
	var data = null;
	
	beforeEach(function(){
		data = [1,2,3,4,5,6];
	});
	
	it("should split the array into 2 correctly", function(){
		var results = (Slack.from(data)
							.partition(3)
							);
							
		var first = results.item1.toArray();
		var second = results.item2.toArray();
		expect(first[0]).equal(1);
		expect(first[1]).equal(2);
		expect(first[2]).equal(3);
		expect(second[0]).equal(4);
		expect(second[1]).equal(5);
		expect(second[2]).equal(6);
	});
	
	it("should have the correct count", function(){
		var results = (Slack.from(data)
							.partition(3)
							);
							
		var first = results.item1.toArray();
		var second = results.item2.toArray();
		
		expect(first.length).equal(3);
		expect(second.length).equal(3);
		
	});
});