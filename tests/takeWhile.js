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
	
	it("should take items in the stream until the predicate fails", function(){
		var results = (Slack.from(data)
							.takeWhile(function(item){
								return item.age > 25;
							})
							.toArray());
							
		expect(results[0].name).equal("Blair");
		expect(results[1].name).equal("Esther");
		expect(results[2].name).equal("Tom");
		expect(results[3].name).equal("Sophie");
	});
	
	it("should have the correct count", function(){
		var results = (Slack.from(data)
							.takeWhile(function(item){
								return item.age > 25;
							})
							.toArray());
							
		expect(results.length).equal(4);
	});
});