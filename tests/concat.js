var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Concat function tests", function(){
	
	var data1 = null;
	var data2 = null;

	beforeEach(function(){
		data1 = [1,2,3];
		data2 = [4,5,6];
	});
	
	it("should combine both arrays", function(){
		var results = (Slack.from(data1)
							.concat(data2)
							.toArray());
							
		expect(results[0]).equal(1);
		expect(results[1]).equal(2);
		expect(results[2]).equal(3);
		expect(results[3]).equal(4);
		expect(results[4]).equal(5);
		expect(results[5]).equal(6);
	});
	
	it("should have the correct count", function(){
		var results = (Slack.from(data1)
							.concat(data2)
							.toArray());
							
		expect(results.length).equal(6);
	});
});