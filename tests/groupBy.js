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
							
		var xz;
		
	});
	
});