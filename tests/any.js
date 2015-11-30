var expect = require("chai").expect;
var Slack = require("../lib/slack.babel.js").default.default;
describe("Any function tests", function () {

	var data = null;

	beforeEach(function () {
		data = [1, 2, 3];
	});

	it("should return the whether an element is contained in the lazy source", function () {
		var result = (Slack.from(data)
			.any(function (v) {
				return v === 3;
			}));

		expect(result).equal(true);
	});
	
	it("should return the whether an element is not contained in the lazy source", function () {
		var result = (Slack.from(data)
			.any(function (v) {
				return v === 4;
			}));

		expect(result).equal(false);
	});

});