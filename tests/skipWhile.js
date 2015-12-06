var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("TakeWhile function tests", function(){
	
	var data = null;
	
	beforeEach(function(){
		data = [
			{name: 'Blair', age: 34},
			{name: 'Esther', age: 34},
			{name: 'Tom', age: 26},
			{name: 'Sophie', age: 30},
			{name: 'Alice', age: 3},
			{name: 'Lilly', age: 2},
			{name: 'Chris', age: 42}
			];
	});
	
	it("should skip items in the stream until the predicate fails", function(){
		var results = (Slack.from(data)
							.skipWhile(function(item){
								return item.age > 25;
							})
							.toArray());
							
		expect(results[0].name).equal("Alice");
		expect(results[1].name).equal("Lilly");
		expect(results[2].name).equal("Chris");
	});
	
	it("should have the correct count", function(){
		var results = (Slack.from(data)
							.skipWhile(function(item){
								return item.age > 25;
							})
							.toArray());
							
		expect(results.length).equal(3);
	});
});