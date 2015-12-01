"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slack = (function () {
	function Slack() {
		_classCallCheck(this, Slack);
	}

	_createClass(Slack, null, [{
		key: "from",
		value: function from(source) {
			return new LazySource(new Stream(source));
		}
	}, {
		key: "range",
		value: function range(start, end) {
			return new LazySource(new Range(start, end));
		}
	}, {
		key: "generator",
		value: function generator(initial, next) {
			return new LazySource(new Generator(initial, next));
		}
	}]);

	return Slack;
})();

exports.default = Slack;

var Generator = (function () {
	function Generator(initial, next) {
		_classCallCheck(this, Generator);

		this.initial = initial;
		this.next = next;
	}

	_createClass(Generator, [{
		key: "apply",
		value: regeneratorRuntime.mark(function apply() {
			var element;
			return regeneratorRuntime.wrap(function apply$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							element = this.initial;

						case 1:
							_context.next = 3;
							return element;

						case 3:
							element = this.next(element);

						case 4:
							_context.next = 1;
							break;

						case 6:
						case "end":
							return _context.stop();
					}
				}
			}, apply, this);
		})
	}]);

	return Generator;
})();

var Range = (function () {
	function Range(from, to) {
		_classCallCheck(this, Range);

		this.from = from;
		this.to = to;
	}

	_createClass(Range, [{
		key: "apply",
		value: regeneratorRuntime.mark(function apply() {
			var i;
			return regeneratorRuntime.wrap(function apply$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							i = this.from;

						case 1:
							if (!(i <= this.to)) {
								_context2.next = 7;
								break;
							}

							_context2.next = 4;
							return i;

						case 4:
							++i;
							_context2.next = 1;
							break;

						case 7:
						case "end":
							return _context2.stop();
					}
				}
			}, apply, this);
		})
	}]);

	return Range;
})();

var Stream = (function () {
	function Stream(source) {
		_classCallCheck(this, Stream);

		this.source = source;
	}

	_createClass(Stream, [{
		key: "apply",
		value: regeneratorRuntime.mark(function apply() {
			var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

			return regeneratorRuntime.wrap(function apply$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_iteratorNormalCompletion = true;
							_didIteratorError = false;
							_iteratorError = undefined;
							_context3.prev = 3;
							_iterator = this.source[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
								_context3.next = 12;
								break;
							}

							element = _step.value;
							_context3.next = 9;
							return element;

						case 9:
							_iteratorNormalCompletion = true;
							_context3.next = 5;
							break;

						case 12:
							_context3.next = 18;
							break;

						case 14:
							_context3.prev = 14;
							_context3.t0 = _context3["catch"](3);
							_didIteratorError = true;
							_iteratorError = _context3.t0;

						case 18:
							_context3.prev = 18;
							_context3.prev = 19;

							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}

						case 21:
							_context3.prev = 21;

							if (!_didIteratorError) {
								_context3.next = 24;
								break;
							}

							throw _iteratorError;

						case 24:
							return _context3.finish(21);

						case 25:
							return _context3.finish(18);

						case 26:
						case "end":
							return _context3.stop();
					}
				}
			}, apply, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		})
	}]);

	return Stream;
})();

var LazySource = (function () {
	function LazySource(source) {
		_classCallCheck(this, LazySource);

		this.source = source;
	}

	_createClass(LazySource, [{
		key: "apply",
		value: regeneratorRuntime.mark(function apply() {
			var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, e;

			return regeneratorRuntime.wrap(function apply$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_iteratorNormalCompletion2 = true;
							_didIteratorError2 = false;
							_iteratorError2 = undefined;
							_context4.prev = 3;
							_iterator2 = this.source.apply()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
								_context4.next = 12;
								break;
							}

							e = _step2.value;
							_context4.next = 9;
							return e;

						case 9:
							_iteratorNormalCompletion2 = true;
							_context4.next = 5;
							break;

						case 12:
							_context4.next = 18;
							break;

						case 14:
							_context4.prev = 14;
							_context4.t0 = _context4["catch"](3);
							_didIteratorError2 = true;
							_iteratorError2 = _context4.t0;

						case 18:
							_context4.prev = 18;
							_context4.prev = 19;

							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}

						case 21:
							_context4.prev = 21;

							if (!_didIteratorError2) {
								_context4.next = 24;
								break;
							}

							throw _iteratorError2;

						case 24:
							return _context4.finish(21);

						case 25:
							return _context4.finish(18);

						case 26:
						case "end":
							return _context4.stop();
					}
				}
			}, apply, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		})
	}, {
		key: "map",
		value: function map(f) {

			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _e;

						return regeneratorRuntime.wrap(function value$(_context5) {
							while (1) {
								switch (_context5.prev = _context5.next) {
									case 0:
										_iteratorNormalCompletion3 = true;
										_didIteratorError3 = false;
										_iteratorError3 = undefined;
										_context5.prev = 3;
										_iterator3 = self.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
											_context5.next = 12;
											break;
										}

										_e = _step3.value;
										_context5.next = 9;
										return f(_e);

									case 9:
										_iteratorNormalCompletion3 = true;
										_context5.next = 5;
										break;

									case 12:
										_context5.next = 18;
										break;

									case 14:
										_context5.prev = 14;
										_context5.t0 = _context5["catch"](3);
										_didIteratorError3 = true;
										_iteratorError3 = _context5.t0;

									case 18:
										_context5.prev = 18;
										_context5.prev = 19;

										if (!_iteratorNormalCompletion3 && _iterator3.return) {
											_iterator3.return();
										}

									case 21:
										_context5.prev = 21;

										if (!_didIteratorError3) {
											_context5.next = 24;
											break;
										}

										throw _iteratorError3;

									case 24:
										return _context5.finish(21);

									case 25:
										return _context5.finish(18);

									case 26:
									case "end":
										return _context5.stop();
								}
							}
						}, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "filter",
		value: function filter(f) {
			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _e2;

						return regeneratorRuntime.wrap(function value$(_context6) {
							while (1) {
								switch (_context6.prev = _context6.next) {
									case 0:
										_iteratorNormalCompletion4 = true;
										_didIteratorError4 = false;
										_iteratorError4 = undefined;
										_context6.prev = 3;
										_iterator4 = self.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
											_context6.next = 13;
											break;
										}

										_e2 = _step4.value;

										if (!f(_e2)) {
											_context6.next = 10;
											break;
										}

										_context6.next = 10;
										return _e2;

									case 10:
										_iteratorNormalCompletion4 = true;
										_context6.next = 5;
										break;

									case 13:
										_context6.next = 19;
										break;

									case 15:
										_context6.prev = 15;
										_context6.t0 = _context6["catch"](3);
										_didIteratorError4 = true;
										_iteratorError4 = _context6.t0;

									case 19:
										_context6.prev = 19;
										_context6.prev = 20;

										if (!_iteratorNormalCompletion4 && _iterator4.return) {
											_iterator4.return();
										}

									case 22:
										_context6.prev = 22;

										if (!_didIteratorError4) {
											_context6.next = 25;
											break;
										}

										throw _iteratorError4;

									case 25:
										return _context6.finish(22);

									case 26:
										return _context6.finish(19);

									case 27:
									case "end":
										return _context6.stop();
								}
							}
						}, value, this, [[3, 15, 19, 27], [20,, 22, 26]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "concat",
		value: function concat(other) {
			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _e3, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _e4;

						return regeneratorRuntime.wrap(function value$(_context7) {
							while (1) {
								switch (_context7.prev = _context7.next) {
									case 0:
										_iteratorNormalCompletion5 = true;
										_didIteratorError5 = false;
										_iteratorError5 = undefined;
										_context7.prev = 3;
										_iterator5 = self.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
											_context7.next = 12;
											break;
										}

										_e3 = _step5.value;
										_context7.next = 9;
										return _e3;

									case 9:
										_iteratorNormalCompletion5 = true;
										_context7.next = 5;
										break;

									case 12:
										_context7.next = 18;
										break;

									case 14:
										_context7.prev = 14;
										_context7.t0 = _context7["catch"](3);
										_didIteratorError5 = true;
										_iteratorError5 = _context7.t0;

									case 18:
										_context7.prev = 18;
										_context7.prev = 19;

										if (!_iteratorNormalCompletion5 && _iterator5.return) {
											_iterator5.return();
										}

									case 21:
										_context7.prev = 21;

										if (!_didIteratorError5) {
											_context7.next = 24;
											break;
										}

										throw _iteratorError5;

									case 24:
										return _context7.finish(21);

									case 25:
										return _context7.finish(18);

									case 26:
										_iteratorNormalCompletion6 = true;
										_didIteratorError6 = false;
										_iteratorError6 = undefined;
										_context7.prev = 29;
										_iterator6 = other[Symbol.iterator]();

									case 31:
										if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
											_context7.next = 38;
											break;
										}

										_e4 = _step6.value;
										_context7.next = 35;
										return _e4;

									case 35:
										_iteratorNormalCompletion6 = true;
										_context7.next = 31;
										break;

									case 38:
										_context7.next = 44;
										break;

									case 40:
										_context7.prev = 40;
										_context7.t1 = _context7["catch"](29);
										_didIteratorError6 = true;
										_iteratorError6 = _context7.t1;

									case 44:
										_context7.prev = 44;
										_context7.prev = 45;

										if (!_iteratorNormalCompletion6 && _iterator6.return) {
											_iterator6.return();
										}

									case 47:
										_context7.prev = 47;

										if (!_didIteratorError6) {
											_context7.next = 50;
											break;
										}

										throw _iteratorError6;

									case 50:
										return _context7.finish(47);

									case 51:
										return _context7.finish(44);

									case 52:
									case "end":
										return _context7.stop();
								}
							}
						}, value, this, [[3, 14, 18, 26], [19,, 21, 25], [29, 40, 44, 52], [45,, 47, 51]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "concatLazy",
		value: function concatLazy(other) {
			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _e5, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _e6;

						return regeneratorRuntime.wrap(function value$(_context8) {
							while (1) {
								switch (_context8.prev = _context8.next) {
									case 0:
										_iteratorNormalCompletion7 = true;
										_didIteratorError7 = false;
										_iteratorError7 = undefined;
										_context8.prev = 3;
										_iterator7 = self.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
											_context8.next = 12;
											break;
										}

										_e5 = _step7.value;
										_context8.next = 9;
										return _e5;

									case 9:
										_iteratorNormalCompletion7 = true;
										_context8.next = 5;
										break;

									case 12:
										_context8.next = 18;
										break;

									case 14:
										_context8.prev = 14;
										_context8.t0 = _context8["catch"](3);
										_didIteratorError7 = true;
										_iteratorError7 = _context8.t0;

									case 18:
										_context8.prev = 18;
										_context8.prev = 19;

										if (!_iteratorNormalCompletion7 && _iterator7.return) {
											_iterator7.return();
										}

									case 21:
										_context8.prev = 21;

										if (!_didIteratorError7) {
											_context8.next = 24;
											break;
										}

										throw _iteratorError7;

									case 24:
										return _context8.finish(21);

									case 25:
										return _context8.finish(18);

									case 26:
										_iteratorNormalCompletion8 = true;
										_didIteratorError8 = false;
										_iteratorError8 = undefined;
										_context8.prev = 29;
										_iterator8 = other.apply()[Symbol.iterator]();

									case 31:
										if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
											_context8.next = 38;
											break;
										}

										_e6 = _step8.value;
										_context8.next = 35;
										return _e6;

									case 35:
										_iteratorNormalCompletion8 = true;
										_context8.next = 31;
										break;

									case 38:
										_context8.next = 44;
										break;

									case 40:
										_context8.prev = 40;
										_context8.t1 = _context8["catch"](29);
										_didIteratorError8 = true;
										_iteratorError8 = _context8.t1;

									case 44:
										_context8.prev = 44;
										_context8.prev = 45;

										if (!_iteratorNormalCompletion8 && _iterator8.return) {
											_iterator8.return();
										}

									case 47:
										_context8.prev = 47;

										if (!_didIteratorError8) {
											_context8.next = 50;
											break;
										}

										throw _iteratorError8;

									case 50:
										return _context8.finish(47);

									case 51:
										return _context8.finish(44);

									case 52:
									case "end":
										return _context8.stop();
								}
							}
						}, value, this, [[3, 14, 18, 26], [19,, 21, 25], [29, 40, 44, 52], [45,, 47, 51]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "flatMapLazy",
		value: function flatMapLazy(f) {
			var s = this.source;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, _e7, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, _i;

						return regeneratorRuntime.wrap(function value$(_context9) {
							while (1) {
								switch (_context9.prev = _context9.next) {
									case 0:
										_iteratorNormalCompletion9 = true;
										_didIteratorError9 = false;
										_iteratorError9 = undefined;
										_context9.prev = 3;
										_iterator9 = s.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
											_context9.next = 36;
											break;
										}

										_e7 = _step9.value;
										_iteratorNormalCompletion10 = true;
										_didIteratorError10 = false;
										_iteratorError10 = undefined;
										_context9.prev = 10;
										_iterator10 = _e7.source.apply()[Symbol.iterator]();

									case 12:
										if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
											_context9.next = 19;
											break;
										}

										_i = _step10.value;
										_context9.next = 16;
										return _i;

									case 16:
										_iteratorNormalCompletion10 = true;
										_context9.next = 12;
										break;

									case 19:
										_context9.next = 25;
										break;

									case 21:
										_context9.prev = 21;
										_context9.t0 = _context9["catch"](10);
										_didIteratorError10 = true;
										_iteratorError10 = _context9.t0;

									case 25:
										_context9.prev = 25;
										_context9.prev = 26;

										if (!_iteratorNormalCompletion10 && _iterator10.return) {
											_iterator10.return();
										}

									case 28:
										_context9.prev = 28;

										if (!_didIteratorError10) {
											_context9.next = 31;
											break;
										}

										throw _iteratorError10;

									case 31:
										return _context9.finish(28);

									case 32:
										return _context9.finish(25);

									case 33:
										_iteratorNormalCompletion9 = true;
										_context9.next = 5;
										break;

									case 36:
										_context9.next = 42;
										break;

									case 38:
										_context9.prev = 38;
										_context9.t1 = _context9["catch"](3);
										_didIteratorError9 = true;
										_iteratorError9 = _context9.t1;

									case 42:
										_context9.prev = 42;
										_context9.prev = 43;

										if (!_iteratorNormalCompletion9 && _iterator9.return) {
											_iterator9.return();
										}

									case 45:
										_context9.prev = 45;

										if (!_didIteratorError9) {
											_context9.next = 48;
											break;
										}

										throw _iteratorError9;

									case 48:
										return _context9.finish(45);

									case 49:
										return _context9.finish(42);

									case 50:
									case "end":
										return _context9.stop();
								}
							}
						}, value, this, [[3, 38, 42, 50], [10, 21, 25, 33], [26,, 28, 32], [43,, 45, 49]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "flatMap",
		value: function flatMap(f) {
			var s = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, _e8, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, _i2;

						return regeneratorRuntime.wrap(function value$(_context10) {
							while (1) {
								switch (_context10.prev = _context10.next) {
									case 0:
										_iteratorNormalCompletion11 = true;
										_didIteratorError11 = false;
										_iteratorError11 = undefined;
										_context10.prev = 3;
										_iterator11 = s.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
											_context10.next = 36;
											break;
										}

										_e8 = _step11.value;
										_iteratorNormalCompletion12 = true;
										_didIteratorError12 = false;
										_iteratorError12 = undefined;
										_context10.prev = 10;
										_iterator12 = _e8[Symbol.iterator]();

									case 12:
										if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
											_context10.next = 19;
											break;
										}

										_i2 = _step12.value;
										_context10.next = 16;
										return _i2;

									case 16:
										_iteratorNormalCompletion12 = true;
										_context10.next = 12;
										break;

									case 19:
										_context10.next = 25;
										break;

									case 21:
										_context10.prev = 21;
										_context10.t0 = _context10["catch"](10);
										_didIteratorError12 = true;
										_iteratorError12 = _context10.t0;

									case 25:
										_context10.prev = 25;
										_context10.prev = 26;

										if (!_iteratorNormalCompletion12 && _iterator12.return) {
											_iterator12.return();
										}

									case 28:
										_context10.prev = 28;

										if (!_didIteratorError12) {
											_context10.next = 31;
											break;
										}

										throw _iteratorError12;

									case 31:
										return _context10.finish(28);

									case 32:
										return _context10.finish(25);

									case 33:
										_iteratorNormalCompletion11 = true;
										_context10.next = 5;
										break;

									case 36:
										_context10.next = 42;
										break;

									case 38:
										_context10.prev = 38;
										_context10.t1 = _context10["catch"](3);
										_didIteratorError11 = true;
										_iteratorError11 = _context10.t1;

									case 42:
										_context10.prev = 42;
										_context10.prev = 43;

										if (!_iteratorNormalCompletion11 && _iterator11.return) {
											_iterator11.return();
										}

									case 45:
										_context10.prev = 45;

										if (!_didIteratorError11) {
											_context10.next = 48;
											break;
										}

										throw _iteratorError11;

									case 48:
										return _context10.finish(45);

									case 49:
										return _context10.finish(42);

									case 50:
									case "end":
										return _context10.stop();
								}
							}
						}, value, this, [[3, 38, 42, 50], [10, 21, 25, 33], [26,, 28, 32], [43,, 45, 49]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "distinct",
		value: function distinct(f) {
			var s = this;
			var added = new Map();
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, _e9, selector, _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, _e10;

						return regeneratorRuntime.wrap(function value$(_context11) {
							while (1) {
								switch (_context11.prev = _context11.next) {
									case 0:
										_iteratorNormalCompletion13 = true;
										_didIteratorError13 = false;
										_iteratorError13 = undefined;
										_context11.prev = 3;

										for (_iterator13 = s.apply()[Symbol.iterator](); !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
											_e9 = _step13.value;
											selector = f(_e9);

											if (!added.get(selector)) {
												added.set(selector, selector);
											}
										}
										_context11.next = 11;
										break;

									case 7:
										_context11.prev = 7;
										_context11.t0 = _context11["catch"](3);
										_didIteratorError13 = true;
										_iteratorError13 = _context11.t0;

									case 11:
										_context11.prev = 11;
										_context11.prev = 12;

										if (!_iteratorNormalCompletion13 && _iterator13.return) {
											_iterator13.return();
										}

									case 14:
										_context11.prev = 14;

										if (!_didIteratorError13) {
											_context11.next = 17;
											break;
										}

										throw _iteratorError13;

									case 17:
										return _context11.finish(14);

									case 18:
										return _context11.finish(11);

									case 19:
										_iteratorNormalCompletion14 = true;
										_didIteratorError14 = false;
										_iteratorError14 = undefined;
										_context11.prev = 22;
										_iterator14 = added.values()[Symbol.iterator]();

									case 24:
										if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
											_context11.next = 31;
											break;
										}

										_e10 = _step14.value;
										_context11.next = 28;
										return _e10;

									case 28:
										_iteratorNormalCompletion14 = true;
										_context11.next = 24;
										break;

									case 31:
										_context11.next = 37;
										break;

									case 33:
										_context11.prev = 33;
										_context11.t1 = _context11["catch"](22);
										_didIteratorError14 = true;
										_iteratorError14 = _context11.t1;

									case 37:
										_context11.prev = 37;
										_context11.prev = 38;

										if (!_iteratorNormalCompletion14 && _iterator14.return) {
											_iterator14.return();
										}

									case 40:
										_context11.prev = 40;

										if (!_didIteratorError14) {
											_context11.next = 43;
											break;
										}

										throw _iteratorError14;

									case 43:
										return _context11.finish(40);

									case 44:
										return _context11.finish(37);

									case 45:
									case "end":
										return _context11.stop();
								}
							}
						}, value, this, [[3, 7, 11, 19], [12,, 14, 18], [22, 33, 37, 45], [38,, 40, 44]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "foreach",
		value: function foreach(f) {
			var _iteratorNormalCompletion15 = true;
			var _didIteratorError15 = false;
			var _iteratorError15 = undefined;

			try {
				for (var _iterator15 = this.apply()[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
					var _e11 = _step15.value;

					f(_e11);
				}
			} catch (err) {
				_didIteratorError15 = true;
				_iteratorError15 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion15 && _iterator15.return) {
						_iterator15.return();
					}
				} finally {
					if (_didIteratorError15) {
						throw _iteratorError15;
					}
				}
			}
		}
	}, {
		key: "take",
		value: function take(n) {

			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var total, _iteratorNormalCompletion16, _didIteratorError16, _iteratorError16, _iterator16, _step16, _e12;

						return regeneratorRuntime.wrap(function value$(_context12) {
							while (1) {
								switch (_context12.prev = _context12.next) {
									case 0:
										total = 0;
										_iteratorNormalCompletion16 = true;
										_didIteratorError16 = false;
										_iteratorError16 = undefined;
										_context12.prev = 4;
										_iterator16 = self.apply()[Symbol.iterator]();

									case 6:
										if (_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done) {
											_context12.next = 14;
											break;
										}

										_e12 = _step16.value;

										if (!(++total <= n)) {
											_context12.next = 11;
											break;
										}

										_context12.next = 11;
										return _e12;

									case 11:
										_iteratorNormalCompletion16 = true;
										_context12.next = 6;
										break;

									case 14:
										_context12.next = 20;
										break;

									case 16:
										_context12.prev = 16;
										_context12.t0 = _context12["catch"](4);
										_didIteratorError16 = true;
										_iteratorError16 = _context12.t0;

									case 20:
										_context12.prev = 20;
										_context12.prev = 21;

										if (!_iteratorNormalCompletion16 && _iterator16.return) {
											_iterator16.return();
										}

									case 23:
										_context12.prev = 23;

										if (!_didIteratorError16) {
											_context12.next = 26;
											break;
										}

										throw _iteratorError16;

									case 26:
										return _context12.finish(23);

									case 27:
										return _context12.finish(20);

									case 28:
									case "end":
										return _context12.stop();
								}
							}
						}, value, this, [[4, 16, 20, 28], [21,, 23, 27]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "skip",
		value: function skip(n) {

			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var total, _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _e13;

						return regeneratorRuntime.wrap(function value$(_context13) {
							while (1) {
								switch (_context13.prev = _context13.next) {
									case 0:
										total = 0;
										_iteratorNormalCompletion17 = true;
										_didIteratorError17 = false;
										_iteratorError17 = undefined;
										_context13.prev = 4;
										_iterator17 = self.apply()[Symbol.iterator]();

									case 6:
										if (_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done) {
											_context13.next = 14;
											break;
										}

										_e13 = _step17.value;

										if (!(++total > n)) {
											_context13.next = 11;
											break;
										}

										_context13.next = 11;
										return _e13;

									case 11:
										_iteratorNormalCompletion17 = true;
										_context13.next = 6;
										break;

									case 14:
										_context13.next = 20;
										break;

									case 16:
										_context13.prev = 16;
										_context13.t0 = _context13["catch"](4);
										_didIteratorError17 = true;
										_iteratorError17 = _context13.t0;

									case 20:
										_context13.prev = 20;
										_context13.prev = 21;

										if (!_iteratorNormalCompletion17 && _iterator17.return) {
											_iterator17.return();
										}

									case 23:
										_context13.prev = 23;

										if (!_didIteratorError17) {
											_context13.next = 26;
											break;
										}

										throw _iteratorError17;

									case 26:
										return _context13.finish(23);

									case 27:
										return _context13.finish(20);

									case 28:
									case "end":
										return _context13.stop();
								}
							}
						}, value, this, [[4, 16, 20, 28], [21,, 23, 27]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "partition",
		value: function partition(n) {
			var self = this;
			var result = {
				item1: Object.create(self, {
					apply: {
						value: regeneratorRuntime.mark(function value() {
							var total, _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, _e14;

							return regeneratorRuntime.wrap(function value$(_context14) {
								while (1) {
									switch (_context14.prev = _context14.next) {
										case 0:
											total = 0;
											_iteratorNormalCompletion18 = true;
											_didIteratorError18 = false;
											_iteratorError18 = undefined;
											_context14.prev = 4;
											_iterator18 = self.apply()[Symbol.iterator]();

										case 6:
											if (_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done) {
												_context14.next = 14;
												break;
											}

											_e14 = _step18.value;

											if (!(++total <= n)) {
												_context14.next = 11;
												break;
											}

											_context14.next = 11;
											return _e14;

										case 11:
											_iteratorNormalCompletion18 = true;
											_context14.next = 6;
											break;

										case 14:
											_context14.next = 20;
											break;

										case 16:
											_context14.prev = 16;
											_context14.t0 = _context14["catch"](4);
											_didIteratorError18 = true;
											_iteratorError18 = _context14.t0;

										case 20:
											_context14.prev = 20;
											_context14.prev = 21;

											if (!_iteratorNormalCompletion18 && _iterator18.return) {
												_iterator18.return();
											}

										case 23:
											_context14.prev = 23;

											if (!_didIteratorError18) {
												_context14.next = 26;
												break;
											}

											throw _iteratorError18;

										case 26:
											return _context14.finish(23);

										case 27:
											return _context14.finish(20);

										case 28:
										case "end":
											return _context14.stop();
									}
								}
							}, value, this, [[4, 16, 20, 28], [21,, 23, 27]]);
						})
					}
				}), item2: Object.create(self, {
					apply: {
						value: regeneratorRuntime.mark(function value() {
							var total, _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19, _e15;

							return regeneratorRuntime.wrap(function value$(_context15) {
								while (1) {
									switch (_context15.prev = _context15.next) {
										case 0:
											total = 0;
											_iteratorNormalCompletion19 = true;
											_didIteratorError19 = false;
											_iteratorError19 = undefined;
											_context15.prev = 4;
											_iterator19 = self.apply()[Symbol.iterator]();

										case 6:
											if (_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done) {
												_context15.next = 14;
												break;
											}

											_e15 = _step19.value;

											if (!(++total > n)) {
												_context15.next = 11;
												break;
											}

											_context15.next = 11;
											return _e15;

										case 11:
											_iteratorNormalCompletion19 = true;
											_context15.next = 6;
											break;

										case 14:
											_context15.next = 20;
											break;

										case 16:
											_context15.prev = 16;
											_context15.t0 = _context15["catch"](4);
											_didIteratorError19 = true;
											_iteratorError19 = _context15.t0;

										case 20:
											_context15.prev = 20;
											_context15.prev = 21;

											if (!_iteratorNormalCompletion19 && _iterator19.return) {
												_iterator19.return();
											}

										case 23:
											_context15.prev = 23;

											if (!_didIteratorError19) {
												_context15.next = 26;
												break;
											}

											throw _iteratorError19;

										case 26:
											return _context15.finish(23);

										case 27:
											return _context15.finish(20);

										case 28:
										case "end":
											return _context15.stop();
									}
								}
							}, value, this, [[4, 16, 20, 28], [21,, 23, 27]]);
						})
					}

				})
			};

			return result;
		}
	}, {
		key: "toMap",
		value: function toMap(k, d) {
			var map = new Map();
			var _iteratorNormalCompletion20 = true;
			var _didIteratorError20 = false;
			var _iteratorError20 = undefined;

			try {
				for (var _iterator20 = this.apply()[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
					var _e16 = _step20.value;

					map.set(k(_e16), d(_e16));
				}
			} catch (err) {
				_didIteratorError20 = true;
				_iteratorError20 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion20 && _iterator20.return) {
						_iterator20.return();
					}
				} finally {
					if (_didIteratorError20) {
						throw _iteratorError20;
					}
				}
			}

			return map;
		}
	}, {
		key: "toArray",
		value: function toArray() {
			var results = [];
			var _iteratorNormalCompletion21 = true;
			var _didIteratorError21 = false;
			var _iteratorError21 = undefined;

			try {
				for (var _iterator21 = this.apply()[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
					var _e17 = _step21.value;

					results.push(_e17);
				}
			} catch (err) {
				_didIteratorError21 = true;
				_iteratorError21 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion21 && _iterator21.return) {
						_iterator21.return();
					}
				} finally {
					if (_didIteratorError21) {
						throw _iteratorError21;
					}
				}
			}

			return results;
		}
	}, {
		key: "enumerate",
		value: regeneratorRuntime.mark(function enumerate() {
			var _iteratorNormalCompletion22, _didIteratorError22, _iteratorError22, _iterator22, _step22, _e18;

			return regeneratorRuntime.wrap(function enumerate$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							_iteratorNormalCompletion22 = true;
							_didIteratorError22 = false;
							_iteratorError22 = undefined;
							_context16.prev = 3;
							_iterator22 = this.apply()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done) {
								_context16.next = 12;
								break;
							}

							_e18 = _step22.value;
							_context16.next = 9;
							return _e18;

						case 9:
							_iteratorNormalCompletion22 = true;
							_context16.next = 5;
							break;

						case 12:
							_context16.next = 18;
							break;

						case 14:
							_context16.prev = 14;
							_context16.t0 = _context16["catch"](3);
							_didIteratorError22 = true;
							_iteratorError22 = _context16.t0;

						case 18:
							_context16.prev = 18;
							_context16.prev = 19;

							if (!_iteratorNormalCompletion22 && _iterator22.return) {
								_iterator22.return();
							}

						case 21:
							_context16.prev = 21;

							if (!_didIteratorError22) {
								_context16.next = 24;
								break;
							}

							throw _iteratorError22;

						case 24:
							return _context16.finish(21);

						case 25:
							return _context16.finish(18);

						case 26:
						case "end":
							return _context16.stop();
					}
				}
			}, enumerate, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		})
	}, {
		key: "first",
		value: function first() {
			var _iteratorNormalCompletion23 = true;
			var _didIteratorError23 = false;
			var _iteratorError23 = undefined;

			try {
				for (var _iterator23 = this.apply()[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
					var _e19 = _step23.value;

					return _e19;
				}
			} catch (err) {
				_didIteratorError23 = true;
				_iteratorError23 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion23 && _iterator23.return) {
						_iterator23.return();
					}
				} finally {
					if (_didIteratorError23) {
						throw _iteratorError23;
					}
				}
			}

			throw new Error("No items in list");
		}
	}, {
		key: "firstOrElse",
		value: function firstOrElse(d) {
			var _iteratorNormalCompletion24 = true;
			var _didIteratorError24 = false;
			var _iteratorError24 = undefined;

			try {
				for (var _iterator24 = this.apply()[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
					var _e20 = _step24.value;

					return _e20;
				}
			} catch (err) {
				_didIteratorError24 = true;
				_iteratorError24 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion24 && _iterator24.return) {
						_iterator24.return();
					}
				} finally {
					if (_didIteratorError24) {
						throw _iteratorError24;
					}
				}
			}

			return d;
		}
	}, {
		key: "last",
		value: function last() {
			var element = undefined;
			var _iteratorNormalCompletion25 = true;
			var _didIteratorError25 = false;
			var _iteratorError25 = undefined;

			try {
				for (var _iterator25 = this.apply()[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
					var _e21 = _step25.value;

					element = _e21;
				}
			} catch (err) {
				_didIteratorError25 = true;
				_iteratorError25 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion25 && _iterator25.return) {
						_iterator25.return();
					}
				} finally {
					if (_didIteratorError25) {
						throw _iteratorError25;
					}
				}
			}

			if (element) return element;

			throw new Error("No items in list");
		}
	}, {
		key: "lastOrElse",
		value: function lastOrElse(d) {
			var element = undefined;
			var _iteratorNormalCompletion26 = true;
			var _didIteratorError26 = false;
			var _iteratorError26 = undefined;

			try {
				for (var _iterator26 = this.apply()[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
					var _e22 = _step26.value;

					element = _e22;
				}
			} catch (err) {
				_didIteratorError26 = true;
				_iteratorError26 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion26 && _iterator26.return) {
						_iterator26.return();
					}
				} finally {
					if (_didIteratorError26) {
						throw _iteratorError26;
					}
				}
			}

			if (element) return element;

			return d;
		}
	}, {
		key: "foldl",
		value: function foldl(f, identity) {
			var _iteratorNormalCompletion27 = true;
			var _didIteratorError27 = false;
			var _iteratorError27 = undefined;

			try {
				for (var _iterator27 = this.apply()[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
					var _e23 = _step27.value;

					identity = f(identity, _e23);
				}
			} catch (err) {
				_didIteratorError27 = true;
				_iteratorError27 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion27 && _iterator27.return) {
						_iterator27.return();
					}
				} finally {
					if (_didIteratorError27) {
						throw _iteratorError27;
					}
				}
			}

			return identity;
		}
	}, {
		key: "sum",
		value: function sum() {
			return this.foldl(function (x, y) {
				return x + y;
			}, 0);
		}
	}, {
		key: "product",
		value: function product() {
			return this.foldl(function (x, y) {
				return x * y;
			}, 1);
		}
	}, {
		key: "any",
		value: function any(f) {
			var _iteratorNormalCompletion28 = true;
			var _didIteratorError28 = false;
			var _iteratorError28 = undefined;

			try {
				for (var _iterator28 = this.apply()[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
					var _e24 = _step28.value;

					if (f(_e24)) return true;
				}
			} catch (err) {
				_didIteratorError28 = true;
				_iteratorError28 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion28 && _iterator28.return) {
						_iterator28.return();
					}
				} finally {
					if (_didIteratorError28) {
						throw _iteratorError28;
					}
				}
			}

			return false;
		}
	}, {
		key: "all",
		value: function all(f) {
			var _iteratorNormalCompletion29 = true;
			var _didIteratorError29 = false;
			var _iteratorError29 = undefined;

			try {
				for (var _iterator29 = this.apply()[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
					var _e25 = _step29.value;

					if (!f(_e25)) return false;
				}
			} catch (err) {
				_didIteratorError29 = true;
				_iteratorError29 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion29 && _iterator29.return) {
						_iterator29.return();
					}
				} finally {
					if (_didIteratorError29) {
						throw _iteratorError29;
					}
				}
			}

			return true;
		}
	}, {
		key: "countWhere",
		value: function countWhere(f) {
			var total = 0;
			var _iteratorNormalCompletion30 = true;
			var _didIteratorError30 = false;
			var _iteratorError30 = undefined;

			try {
				for (var _iterator30 = this.apply()[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
					var _e26 = _step30.value;

					if (f(_e26)) {
						++total;
					}
				}
			} catch (err) {
				_didIteratorError30 = true;
				_iteratorError30 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion30 && _iterator30.return) {
						_iterator30.return();
					}
				} finally {
					if (_didIteratorError30) {
						throw _iteratorError30;
					}
				}
			}

			return total;
		}
	}, {
		key: "minimum",
		value: function minimum() {
			var minimum;
			var _iteratorNormalCompletion31 = true;
			var _didIteratorError31 = false;
			var _iteratorError31 = undefined;

			try {
				for (var _iterator31 = this.apply()[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
					var _e27 = _step31.value;

					if (!minimum) {
						minimum = _e27;
						continue;
					}

					if (_e27 < minimum) minimum = _e27;
				}
			} catch (err) {
				_didIteratorError31 = true;
				_iteratorError31 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion31 && _iterator31.return) {
						_iterator31.return();
					}
				} finally {
					if (_didIteratorError31) {
						throw _iteratorError31;
					}
				}
			}

			return {
				hasMinimum: function hasMinimum() {
					return !!minimum;
				},
				value: function value() {
					return minimum;
				}
			};
		}
	}, {
		key: "maximum",
		value: function maximum() {
			var maximum;
			var _iteratorNormalCompletion32 = true;
			var _didIteratorError32 = false;
			var _iteratorError32 = undefined;

			try {
				for (var _iterator32 = this.apply()[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
					var _e28 = _step32.value;

					if (!maximum) {
						maximum = _e28;
						continue;
					}

					if (_e28 > maximum) maximum = _e28;
				}
			} catch (err) {
				_didIteratorError32 = true;
				_iteratorError32 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion32 && _iterator32.return) {
						_iterator32.return();
					}
				} finally {
					if (_didIteratorError32) {
						throw _iteratorError32;
					}
				}
			}

			return {
				hasMaximum: function hasMaximum() {
					return !!maximum;
				},
				value: function value() {
					return maximum;
				}
			};
		}
	}, {
		key: "size",
		value: function size() {
			var n = 0;
			var _iteratorNormalCompletion33 = true;
			var _didIteratorError33 = false;
			var _iteratorError33 = undefined;

			try {
				for (var _iterator33 = this.apply()[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
					var v = _step33.value;

					n += 1;
				}
			} catch (err) {
				_didIteratorError33 = true;
				_iteratorError33 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion33 && _iterator33.return) {
						_iterator33.return();
					}
				} finally {
					if (_didIteratorError33) {
						throw _iteratorError33;
					}
				}
			}

			return n;
		}
	}]);

	return LazySource;
})();