var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("ToMap function tests", function(){
	
	var data = null;

	beforeEach(function(){
		data = [1,2,3];
	});
	
	it("should return a map object", function(){
		var selector = function(v){
			return v;
		};
		var map = (Slack.from(data)
							.toMap(selector,selector));
							
		expect(map.get(1)).equals(1);
		expect(map.get(2)).equals(2);
		expect(map.get(3)).equals(3);
	});
	
});