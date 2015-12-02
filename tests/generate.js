var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Generate function tests", function(){

	it("should return the correct data", function(){
		var results = (Slack.generate(0, function(v){
			return v < 3;
		}, function(next){
			return next + 1
		}).toArray());
							
		expect(results[0]).equal(0);
		expect(results[1]).equal(1);
		expect(results[2]).equal(2);
	});
	
});