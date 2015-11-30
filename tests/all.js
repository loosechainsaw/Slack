var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("All function tests", function () {

	var data = null;

	beforeEach(function () {
		data = [1, 2, 3];
	});

	it("should return the whether all elements contained in the lazy source satisfy the predicate", function () {
		var result = (Slack.from(data)
			.all(function (v) {
				return v <= 3;
			}));

		expect(result).equal(true);
	});
	
	it("should return the whether all elements contained in the lazy source do not satisfy the predicate", function () {
		var result = (Slack.from(data)
			.all(function (v) {
				return v > 4;
			}));

		expect(result).equal(false);
	});

});