"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

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
		key: "generate",
		value: function generate(initial, advance, next) {
			return new LazySource(new Generator(initial, advance, next));
		}
	}, {
		key: "throw",
		value: function _throw(error) {
			return new LazySource(new Throw(error));
		}
	}, {
		key: "return",
		value: function _return(value) {
			return this.from([value]);
		}
	}, {
		key: "repeat",
		value: function repeat(value) {
			return new LazySource(new Repeat(value));
		}
	}]);

	return Slack;
})();

exports.default = Slack;

var Generator = (function () {
	function Generator(initial, advance, next) {
		_classCallCheck(this, Generator);

		this.initial = initial;
		this.advance = advance;
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
							_context.next = 3;
							return element;

						case 3:
							if (!this.advance(element)) {
								_context.next = 9;
								break;
							}

							element = this.next(element);
							_context.next = 7;
							return element;

						case 7:
							_context.next = 3;
							break;

						case 9:
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

var Throw = (function () {
	function Throw(error) {
		_classCallCheck(this, Throw);

		this.error = error;
	}

	_createClass(Throw, [{
		key: "apply",
		value: regeneratorRuntime.mark(function apply() {
			return regeneratorRuntime.wrap(function apply$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							throw this.error;

						case 1:
						case "end":
							return _context3.stop();
					}
				}
			}, apply, this);
		})
	}]);

	return Throw;
})();

var Repeat = (function () {
	function Repeat(value) {
		_classCallCheck(this, Repeat);

		this.value = value;
	}

	_createClass(Repeat, [{
		key: "apply",
		value: regeneratorRuntime.mark(function apply() {
			return regeneratorRuntime.wrap(function apply$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.next = 2;
							return this.value;

						case 2:
							_context4.next = 0;
							break;

						case 4:
						case "end":
							return _context4.stop();
					}
				}
			}, apply, this);
		})
	}]);

	return Repeat;
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

			return regeneratorRuntime.wrap(function apply$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_iteratorNormalCompletion = true;
							_didIteratorError = false;
							_iteratorError = undefined;
							_context5.prev = 3;
							_iterator = this.source[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
								_context5.next = 12;
								break;
							}

							element = _step.value;
							_context5.next = 9;
							return element;

						case 9:
							_iteratorNormalCompletion = true;
							_context5.next = 5;
							break;

						case 12:
							_context5.next = 18;
							break;

						case 14:
							_context5.prev = 14;
							_context5.t0 = _context5["catch"](3);
							_didIteratorError = true;
							_iteratorError = _context5.t0;

						case 18:
							_context5.prev = 18;
							_context5.prev = 19;

							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}

						case 21:
							_context5.prev = 21;

							if (!_didIteratorError) {
								_context5.next = 24;
								break;
							}

							throw _iteratorError;

						case 24:
							return _context5.finish(21);

						case 25:
							return _context5.finish(18);

						case 26:
						case "end":
							return _context5.stop();
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

			return regeneratorRuntime.wrap(function apply$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							_iteratorNormalCompletion2 = true;
							_didIteratorError2 = false;
							_iteratorError2 = undefined;
							_context6.prev = 3;
							_iterator2 = this.source.apply()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
								_context6.next = 12;
								break;
							}

							e = _step2.value;
							_context6.next = 9;
							return e;

						case 9:
							_iteratorNormalCompletion2 = true;
							_context6.next = 5;
							break;

						case 12:
							_context6.next = 18;
							break;

						case 14:
							_context6.prev = 14;
							_context6.t0 = _context6["catch"](3);
							_didIteratorError2 = true;
							_iteratorError2 = _context6.t0;

						case 18:
							_context6.prev = 18;
							_context6.prev = 19;

							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}

						case 21:
							_context6.prev = 21;

							if (!_didIteratorError2) {
								_context6.next = 24;
								break;
							}

							throw _iteratorError2;

						case 24:
							return _context6.finish(21);

						case 25:
							return _context6.finish(18);

						case 26:
						case "end":
							return _context6.stop();
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

						return regeneratorRuntime.wrap(function value$(_context7) {
							while (1) {
								switch (_context7.prev = _context7.next) {
									case 0:
										_iteratorNormalCompletion3 = true;
										_didIteratorError3 = false;
										_iteratorError3 = undefined;
										_context7.prev = 3;
										_iterator3 = self.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
											_context7.next = 12;
											break;
										}

										_e = _step3.value;
										_context7.next = 9;
										return f(_e);

									case 9:
										_iteratorNormalCompletion3 = true;
										_context7.next = 5;
										break;

									case 12:
										_context7.next = 18;
										break;

									case 14:
										_context7.prev = 14;
										_context7.t0 = _context7["catch"](3);
										_didIteratorError3 = true;
										_iteratorError3 = _context7.t0;

									case 18:
										_context7.prev = 18;
										_context7.prev = 19;

										if (!_iteratorNormalCompletion3 && _iterator3.return) {
											_iterator3.return();
										}

									case 21:
										_context7.prev = 21;

										if (!_didIteratorError3) {
											_context7.next = 24;
											break;
										}

										throw _iteratorError3;

									case 24:
										return _context7.finish(21);

									case 25:
										return _context7.finish(18);

									case 26:
									case "end":
										return _context7.stop();
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

						return regeneratorRuntime.wrap(function value$(_context8) {
							while (1) {
								switch (_context8.prev = _context8.next) {
									case 0:
										_iteratorNormalCompletion4 = true;
										_didIteratorError4 = false;
										_iteratorError4 = undefined;
										_context8.prev = 3;
										_iterator4 = self.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
											_context8.next = 13;
											break;
										}

										_e2 = _step4.value;

										if (!f(_e2)) {
											_context8.next = 10;
											break;
										}

										_context8.next = 10;
										return _e2;

									case 10:
										_iteratorNormalCompletion4 = true;
										_context8.next = 5;
										break;

									case 13:
										_context8.next = 19;
										break;

									case 15:
										_context8.prev = 15;
										_context8.t0 = _context8["catch"](3);
										_didIteratorError4 = true;
										_iteratorError4 = _context8.t0;

									case 19:
										_context8.prev = 19;
										_context8.prev = 20;

										if (!_iteratorNormalCompletion4 && _iterator4.return) {
											_iterator4.return();
										}

									case 22:
										_context8.prev = 22;

										if (!_didIteratorError4) {
											_context8.next = 25;
											break;
										}

										throw _iteratorError4;

									case 25:
										return _context8.finish(22);

									case 26:
										return _context8.finish(19);

									case 27:
									case "end":
										return _context8.stop();
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

						return regeneratorRuntime.wrap(function value$(_context9) {
							while (1) {
								switch (_context9.prev = _context9.next) {
									case 0:
										_iteratorNormalCompletion5 = true;
										_didIteratorError5 = false;
										_iteratorError5 = undefined;
										_context9.prev = 3;
										_iterator5 = self.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
											_context9.next = 12;
											break;
										}

										_e3 = _step5.value;
										_context9.next = 9;
										return _e3;

									case 9:
										_iteratorNormalCompletion5 = true;
										_context9.next = 5;
										break;

									case 12:
										_context9.next = 18;
										break;

									case 14:
										_context9.prev = 14;
										_context9.t0 = _context9["catch"](3);
										_didIteratorError5 = true;
										_iteratorError5 = _context9.t0;

									case 18:
										_context9.prev = 18;
										_context9.prev = 19;

										if (!_iteratorNormalCompletion5 && _iterator5.return) {
											_iterator5.return();
										}

									case 21:
										_context9.prev = 21;

										if (!_didIteratorError5) {
											_context9.next = 24;
											break;
										}

										throw _iteratorError5;

									case 24:
										return _context9.finish(21);

									case 25:
										return _context9.finish(18);

									case 26:
										_iteratorNormalCompletion6 = true;
										_didIteratorError6 = false;
										_iteratorError6 = undefined;
										_context9.prev = 29;
										_iterator6 = other[Symbol.iterator]();

									case 31:
										if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
											_context9.next = 38;
											break;
										}

										_e4 = _step6.value;
										_context9.next = 35;
										return _e4;

									case 35:
										_iteratorNormalCompletion6 = true;
										_context9.next = 31;
										break;

									case 38:
										_context9.next = 44;
										break;

									case 40:
										_context9.prev = 40;
										_context9.t1 = _context9["catch"](29);
										_didIteratorError6 = true;
										_iteratorError6 = _context9.t1;

									case 44:
										_context9.prev = 44;
										_context9.prev = 45;

										if (!_iteratorNormalCompletion6 && _iterator6.return) {
											_iterator6.return();
										}

									case 47:
										_context9.prev = 47;

										if (!_didIteratorError6) {
											_context9.next = 50;
											break;
										}

										throw _iteratorError6;

									case 50:
										return _context9.finish(47);

									case 51:
										return _context9.finish(44);

									case 52:
									case "end":
										return _context9.stop();
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

						return regeneratorRuntime.wrap(function value$(_context10) {
							while (1) {
								switch (_context10.prev = _context10.next) {
									case 0:
										_iteratorNormalCompletion7 = true;
										_didIteratorError7 = false;
										_iteratorError7 = undefined;
										_context10.prev = 3;
										_iterator7 = self.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
											_context10.next = 12;
											break;
										}

										_e5 = _step7.value;
										_context10.next = 9;
										return _e5;

									case 9:
										_iteratorNormalCompletion7 = true;
										_context10.next = 5;
										break;

									case 12:
										_context10.next = 18;
										break;

									case 14:
										_context10.prev = 14;
										_context10.t0 = _context10["catch"](3);
										_didIteratorError7 = true;
										_iteratorError7 = _context10.t0;

									case 18:
										_context10.prev = 18;
										_context10.prev = 19;

										if (!_iteratorNormalCompletion7 && _iterator7.return) {
											_iterator7.return();
										}

									case 21:
										_context10.prev = 21;

										if (!_didIteratorError7) {
											_context10.next = 24;
											break;
										}

										throw _iteratorError7;

									case 24:
										return _context10.finish(21);

									case 25:
										return _context10.finish(18);

									case 26:
										_iteratorNormalCompletion8 = true;
										_didIteratorError8 = false;
										_iteratorError8 = undefined;
										_context10.prev = 29;
										_iterator8 = other.apply()[Symbol.iterator]();

									case 31:
										if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
											_context10.next = 38;
											break;
										}

										_e6 = _step8.value;
										_context10.next = 35;
										return _e6;

									case 35:
										_iteratorNormalCompletion8 = true;
										_context10.next = 31;
										break;

									case 38:
										_context10.next = 44;
										break;

									case 40:
										_context10.prev = 40;
										_context10.t1 = _context10["catch"](29);
										_didIteratorError8 = true;
										_iteratorError8 = _context10.t1;

									case 44:
										_context10.prev = 44;
										_context10.prev = 45;

										if (!_iteratorNormalCompletion8 && _iterator8.return) {
											_iterator8.return();
										}

									case 47:
										_context10.prev = 47;

										if (!_didIteratorError8) {
											_context10.next = 50;
											break;
										}

										throw _iteratorError8;

									case 50:
										return _context10.finish(47);

									case 51:
										return _context10.finish(44);

									case 52:
									case "end":
										return _context10.stop();
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

						return regeneratorRuntime.wrap(function value$(_context11) {
							while (1) {
								switch (_context11.prev = _context11.next) {
									case 0:
										_iteratorNormalCompletion9 = true;
										_didIteratorError9 = false;
										_iteratorError9 = undefined;
										_context11.prev = 3;
										_iterator9 = s.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
											_context11.next = 36;
											break;
										}

										_e7 = _step9.value;
										_iteratorNormalCompletion10 = true;
										_didIteratorError10 = false;
										_iteratorError10 = undefined;
										_context11.prev = 10;
										_iterator10 = _e7.source.apply()[Symbol.iterator]();

									case 12:
										if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
											_context11.next = 19;
											break;
										}

										_i = _step10.value;
										_context11.next = 16;
										return _i;

									case 16:
										_iteratorNormalCompletion10 = true;
										_context11.next = 12;
										break;

									case 19:
										_context11.next = 25;
										break;

									case 21:
										_context11.prev = 21;
										_context11.t0 = _context11["catch"](10);
										_didIteratorError10 = true;
										_iteratorError10 = _context11.t0;

									case 25:
										_context11.prev = 25;
										_context11.prev = 26;

										if (!_iteratorNormalCompletion10 && _iterator10.return) {
											_iterator10.return();
										}

									case 28:
										_context11.prev = 28;

										if (!_didIteratorError10) {
											_context11.next = 31;
											break;
										}

										throw _iteratorError10;

									case 31:
										return _context11.finish(28);

									case 32:
										return _context11.finish(25);

									case 33:
										_iteratorNormalCompletion9 = true;
										_context11.next = 5;
										break;

									case 36:
										_context11.next = 42;
										break;

									case 38:
										_context11.prev = 38;
										_context11.t1 = _context11["catch"](3);
										_didIteratorError9 = true;
										_iteratorError9 = _context11.t1;

									case 42:
										_context11.prev = 42;
										_context11.prev = 43;

										if (!_iteratorNormalCompletion9 && _iterator9.return) {
											_iterator9.return();
										}

									case 45:
										_context11.prev = 45;

										if (!_didIteratorError9) {
											_context11.next = 48;
											break;
										}

										throw _iteratorError9;

									case 48:
										return _context11.finish(45);

									case 49:
										return _context11.finish(42);

									case 50:
									case "end":
										return _context11.stop();
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

						return regeneratorRuntime.wrap(function value$(_context12) {
							while (1) {
								switch (_context12.prev = _context12.next) {
									case 0:
										_iteratorNormalCompletion11 = true;
										_didIteratorError11 = false;
										_iteratorError11 = undefined;
										_context12.prev = 3;
										_iterator11 = s.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
											_context12.next = 36;
											break;
										}

										_e8 = _step11.value;
										_iteratorNormalCompletion12 = true;
										_didIteratorError12 = false;
										_iteratorError12 = undefined;
										_context12.prev = 10;
										_iterator12 = _e8[Symbol.iterator]();

									case 12:
										if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
											_context12.next = 19;
											break;
										}

										_i2 = _step12.value;
										_context12.next = 16;
										return _i2;

									case 16:
										_iteratorNormalCompletion12 = true;
										_context12.next = 12;
										break;

									case 19:
										_context12.next = 25;
										break;

									case 21:
										_context12.prev = 21;
										_context12.t0 = _context12["catch"](10);
										_didIteratorError12 = true;
										_iteratorError12 = _context12.t0;

									case 25:
										_context12.prev = 25;
										_context12.prev = 26;

										if (!_iteratorNormalCompletion12 && _iterator12.return) {
											_iterator12.return();
										}

									case 28:
										_context12.prev = 28;

										if (!_didIteratorError12) {
											_context12.next = 31;
											break;
										}

										throw _iteratorError12;

									case 31:
										return _context12.finish(28);

									case 32:
										return _context12.finish(25);

									case 33:
										_iteratorNormalCompletion11 = true;
										_context12.next = 5;
										break;

									case 36:
										_context12.next = 42;
										break;

									case 38:
										_context12.prev = 38;
										_context12.t1 = _context12["catch"](3);
										_didIteratorError11 = true;
										_iteratorError11 = _context12.t1;

									case 42:
										_context12.prev = 42;
										_context12.prev = 43;

										if (!_iteratorNormalCompletion11 && _iterator11.return) {
											_iterator11.return();
										}

									case 45:
										_context12.prev = 45;

										if (!_didIteratorError11) {
											_context12.next = 48;
											break;
										}

										throw _iteratorError11;

									case 48:
										return _context12.finish(45);

									case 49:
										return _context12.finish(42);

									case 50:
									case "end":
										return _context12.stop();
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

						return regeneratorRuntime.wrap(function value$(_context13) {
							while (1) {
								switch (_context13.prev = _context13.next) {
									case 0:
										_iteratorNormalCompletion13 = true;
										_didIteratorError13 = false;
										_iteratorError13 = undefined;
										_context13.prev = 3;

										for (_iterator13 = s.apply()[Symbol.iterator](); !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
											_e9 = _step13.value;
											selector = f(_e9);

											if (!added.get(selector)) {
												added.set(selector, selector);
											}
										}
										_context13.next = 11;
										break;

									case 7:
										_context13.prev = 7;
										_context13.t0 = _context13["catch"](3);
										_didIteratorError13 = true;
										_iteratorError13 = _context13.t0;

									case 11:
										_context13.prev = 11;
										_context13.prev = 12;

										if (!_iteratorNormalCompletion13 && _iterator13.return) {
											_iterator13.return();
										}

									case 14:
										_context13.prev = 14;

										if (!_didIteratorError13) {
											_context13.next = 17;
											break;
										}

										throw _iteratorError13;

									case 17:
										return _context13.finish(14);

									case 18:
										return _context13.finish(11);

									case 19:
										_iteratorNormalCompletion14 = true;
										_didIteratorError14 = false;
										_iteratorError14 = undefined;
										_context13.prev = 22;
										_iterator14 = added.values()[Symbol.iterator]();

									case 24:
										if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
											_context13.next = 31;
											break;
										}

										_e10 = _step14.value;
										_context13.next = 28;
										return _e10;

									case 28:
										_iteratorNormalCompletion14 = true;
										_context13.next = 24;
										break;

									case 31:
										_context13.next = 37;
										break;

									case 33:
										_context13.prev = 33;
										_context13.t1 = _context13["catch"](22);
										_didIteratorError14 = true;
										_iteratorError14 = _context13.t1;

									case 37:
										_context13.prev = 37;
										_context13.prev = 38;

										if (!_iteratorNormalCompletion14 && _iterator14.return) {
											_iterator14.return();
										}

									case 40:
										_context13.prev = 40;

										if (!_didIteratorError14) {
											_context13.next = 43;
											break;
										}

										throw _iteratorError14;

									case 43:
										return _context13.finish(40);

									case 44:
										return _context13.finish(37);

									case 45:
									case "end":
										return _context13.stop();
								}
							}
						}, value, this, [[3, 7, 11, 19], [12,, 14, 18], [22, 33, 37, 45], [38,, 40, 44]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "distinctUntilChanged",
		value: function distinctUntilChanged(f) {
			var self = this;
			var last = undefined;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var _iteratorNormalCompletion15, _didIteratorError15, _iteratorError15, _iterator15, _step15, _e11, selector;

						return regeneratorRuntime.wrap(function value$(_context14) {
							while (1) {
								switch (_context14.prev = _context14.next) {
									case 0:
										_iteratorNormalCompletion15 = true;
										_didIteratorError15 = false;
										_iteratorError15 = undefined;
										_context14.prev = 3;
										_iterator15 = self.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done) {
											_context14.next = 15;
											break;
										}

										_e11 = _step15.value;
										selector = f(_e11);

										if (!(last != selector)) {
											_context14.next = 12;
											break;
										}

										last = selector;
										_context14.next = 12;
										return last;

									case 12:
										_iteratorNormalCompletion15 = true;
										_context14.next = 5;
										break;

									case 15:
										_context14.next = 21;
										break;

									case 17:
										_context14.prev = 17;
										_context14.t0 = _context14["catch"](3);
										_didIteratorError15 = true;
										_iteratorError15 = _context14.t0;

									case 21:
										_context14.prev = 21;
										_context14.prev = 22;

										if (!_iteratorNormalCompletion15 && _iterator15.return) {
											_iterator15.return();
										}

									case 24:
										_context14.prev = 24;

										if (!_didIteratorError15) {
											_context14.next = 27;
											break;
										}

										throw _iteratorError15;

									case 27:
										return _context14.finish(24);

									case 28:
										return _context14.finish(21);

									case 29:
									case "end":
										return _context14.stop();
								}
							}
						}, value, this, [[3, 17, 21, 29], [22,, 24, 28]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "foreach",
		value: function foreach(f) {
			var _iteratorNormalCompletion16 = true;
			var _didIteratorError16 = false;
			var _iteratorError16 = undefined;

			try {
				for (var _iterator16 = this.apply()[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
					var _e12 = _step16.value;

					f(_e12);
				}
			} catch (err) {
				_didIteratorError16 = true;
				_iteratorError16 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion16 && _iterator16.return) {
						_iterator16.return();
					}
				} finally {
					if (_didIteratorError16) {
						throw _iteratorError16;
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
						var total, _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _e13;

						return regeneratorRuntime.wrap(function value$(_context15) {
							while (1) {
								switch (_context15.prev = _context15.next) {
									case 0:
										total = 0;
										_iteratorNormalCompletion17 = true;
										_didIteratorError17 = false;
										_iteratorError17 = undefined;
										_context15.prev = 4;
										_iterator17 = self.apply()[Symbol.iterator]();

									case 6:
										if (_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done) {
											_context15.next = 14;
											break;
										}

										_e13 = _step17.value;

										if (!(++total <= n)) {
											_context15.next = 11;
											break;
										}

										_context15.next = 11;
										return _e13;

									case 11:
										_iteratorNormalCompletion17 = true;
										_context15.next = 6;
										break;

									case 14:
										_context15.next = 20;
										break;

									case 16:
										_context15.prev = 16;
										_context15.t0 = _context15["catch"](4);
										_didIteratorError17 = true;
										_iteratorError17 = _context15.t0;

									case 20:
										_context15.prev = 20;
										_context15.prev = 21;

										if (!_iteratorNormalCompletion17 && _iterator17.return) {
											_iterator17.return();
										}

									case 23:
										_context15.prev = 23;

										if (!_didIteratorError17) {
											_context15.next = 26;
											break;
										}

										throw _iteratorError17;

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
						var total, _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, _e14;

						return regeneratorRuntime.wrap(function value$(_context16) {
							while (1) {
								switch (_context16.prev = _context16.next) {
									case 0:
										total = 0;
										_iteratorNormalCompletion18 = true;
										_didIteratorError18 = false;
										_iteratorError18 = undefined;
										_context16.prev = 4;
										_iterator18 = self.apply()[Symbol.iterator]();

									case 6:
										if (_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done) {
											_context16.next = 14;
											break;
										}

										_e14 = _step18.value;

										if (!(++total > n)) {
											_context16.next = 11;
											break;
										}

										_context16.next = 11;
										return _e14;

									case 11:
										_iteratorNormalCompletion18 = true;
										_context16.next = 6;
										break;

									case 14:
										_context16.next = 20;
										break;

									case 16:
										_context16.prev = 16;
										_context16.t0 = _context16["catch"](4);
										_didIteratorError18 = true;
										_iteratorError18 = _context16.t0;

									case 20:
										_context16.prev = 20;
										_context16.prev = 21;

										if (!_iteratorNormalCompletion18 && _iterator18.return) {
											_iterator18.return();
										}

									case 23:
										_context16.prev = 23;

										if (!_didIteratorError18) {
											_context16.next = 26;
											break;
										}

										throw _iteratorError18;

									case 26:
										return _context16.finish(23);

									case 27:
										return _context16.finish(20);

									case 28:
									case "end":
										return _context16.stop();
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
							var total, _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19, _e15;

							return regeneratorRuntime.wrap(function value$(_context17) {
								while (1) {
									switch (_context17.prev = _context17.next) {
										case 0:
											total = 0;
											_iteratorNormalCompletion19 = true;
											_didIteratorError19 = false;
											_iteratorError19 = undefined;
											_context17.prev = 4;
											_iterator19 = self.apply()[Symbol.iterator]();

										case 6:
											if (_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done) {
												_context17.next = 14;
												break;
											}

											_e15 = _step19.value;

											if (!(++total <= n)) {
												_context17.next = 11;
												break;
											}

											_context17.next = 11;
											return _e15;

										case 11:
											_iteratorNormalCompletion19 = true;
											_context17.next = 6;
											break;

										case 14:
											_context17.next = 20;
											break;

										case 16:
											_context17.prev = 16;
											_context17.t0 = _context17["catch"](4);
											_didIteratorError19 = true;
											_iteratorError19 = _context17.t0;

										case 20:
											_context17.prev = 20;
											_context17.prev = 21;

											if (!_iteratorNormalCompletion19 && _iterator19.return) {
												_iterator19.return();
											}

										case 23:
											_context17.prev = 23;

											if (!_didIteratorError19) {
												_context17.next = 26;
												break;
											}

											throw _iteratorError19;

										case 26:
											return _context17.finish(23);

										case 27:
											return _context17.finish(20);

										case 28:
										case "end":
											return _context17.stop();
									}
								}
							}, value, this, [[4, 16, 20, 28], [21,, 23, 27]]);
						})
					}
				}), item2: Object.create(self, {
					apply: {
						value: regeneratorRuntime.mark(function value() {
							var total, _iteratorNormalCompletion20, _didIteratorError20, _iteratorError20, _iterator20, _step20, _e16;

							return regeneratorRuntime.wrap(function value$(_context18) {
								while (1) {
									switch (_context18.prev = _context18.next) {
										case 0:
											total = 0;
											_iteratorNormalCompletion20 = true;
											_didIteratorError20 = false;
											_iteratorError20 = undefined;
											_context18.prev = 4;
											_iterator20 = self.apply()[Symbol.iterator]();

										case 6:
											if (_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done) {
												_context18.next = 14;
												break;
											}

											_e16 = _step20.value;

											if (!(++total > n)) {
												_context18.next = 11;
												break;
											}

											_context18.next = 11;
											return _e16;

										case 11:
											_iteratorNormalCompletion20 = true;
											_context18.next = 6;
											break;

										case 14:
											_context18.next = 20;
											break;

										case 16:
											_context18.prev = 16;
											_context18.t0 = _context18["catch"](4);
											_didIteratorError20 = true;
											_iteratorError20 = _context18.t0;

										case 20:
											_context18.prev = 20;
											_context18.prev = 21;

											if (!_iteratorNormalCompletion20 && _iterator20.return) {
												_iterator20.return();
											}

										case 23:
											_context18.prev = 23;

											if (!_didIteratorError20) {
												_context18.next = 26;
												break;
											}

											throw _iteratorError20;

										case 26:
											return _context18.finish(23);

										case 27:
											return _context18.finish(20);

										case 28:
										case "end":
											return _context18.stop();
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
			var _iteratorNormalCompletion21 = true;
			var _didIteratorError21 = false;
			var _iteratorError21 = undefined;

			try {
				for (var _iterator21 = this.apply()[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
					var _e17 = _step21.value;

					map.set(k(_e17), d(_e17));
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

			return map;
		}
	}, {
		key: "toArray",
		value: function toArray() {
			var results = [];
			var _iteratorNormalCompletion22 = true;
			var _didIteratorError22 = false;
			var _iteratorError22 = undefined;

			try {
				for (var _iterator22 = this.apply()[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
					var _e18 = _step22.value;

					results.push(_e18);
				}
			} catch (err) {
				_didIteratorError22 = true;
				_iteratorError22 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion22 && _iterator22.return) {
						_iterator22.return();
					}
				} finally {
					if (_didIteratorError22) {
						throw _iteratorError22;
					}
				}
			}

			return results;
		}
	}, {
		key: "enumerate",
		value: regeneratorRuntime.mark(function enumerate() {
			var _iteratorNormalCompletion23, _didIteratorError23, _iteratorError23, _iterator23, _step23, _e19;

			return regeneratorRuntime.wrap(function enumerate$(_context19) {
				while (1) {
					switch (_context19.prev = _context19.next) {
						case 0:
							_iteratorNormalCompletion23 = true;
							_didIteratorError23 = false;
							_iteratorError23 = undefined;
							_context19.prev = 3;
							_iterator23 = this.apply()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done) {
								_context19.next = 12;
								break;
							}

							_e19 = _step23.value;
							_context19.next = 9;
							return _e19;

						case 9:
							_iteratorNormalCompletion23 = true;
							_context19.next = 5;
							break;

						case 12:
							_context19.next = 18;
							break;

						case 14:
							_context19.prev = 14;
							_context19.t0 = _context19["catch"](3);
							_didIteratorError23 = true;
							_iteratorError23 = _context19.t0;

						case 18:
							_context19.prev = 18;
							_context19.prev = 19;

							if (!_iteratorNormalCompletion23 && _iterator23.return) {
								_iterator23.return();
							}

						case 21:
							_context19.prev = 21;

							if (!_didIteratorError23) {
								_context19.next = 24;
								break;
							}

							throw _iteratorError23;

						case 24:
							return _context19.finish(21);

						case 25:
							return _context19.finish(18);

						case 26:
						case "end":
							return _context19.stop();
					}
				}
			}, enumerate, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		})
	}, {
		key: "first",
		value: function first() {
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

			throw new Error("No items in list");
		}
	}, {
		key: "firstOrElse",
		value: function firstOrElse(d) {
			var _iteratorNormalCompletion25 = true;
			var _didIteratorError25 = false;
			var _iteratorError25 = undefined;

			try {
				for (var _iterator25 = this.apply()[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
					var _e21 = _step25.value;

					return _e21;
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

			return d;
		}
	}, {
		key: "last",
		value: function last() {
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

			throw new Error("No items in list");
		}
	}, {
		key: "lastOrElse",
		value: function lastOrElse(d) {
			var element = undefined;
			var _iteratorNormalCompletion27 = true;
			var _didIteratorError27 = false;
			var _iteratorError27 = undefined;

			try {
				for (var _iterator27 = this.apply()[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
					var _e23 = _step27.value;

					element = _e23;
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

			if (element) return element;

			return d;
		}
	}, {
		key: "foldl",
		value: function foldl(f, identity) {
			var _iteratorNormalCompletion28 = true;
			var _didIteratorError28 = false;
			var _iteratorError28 = undefined;

			try {
				for (var _iterator28 = this.apply()[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
					var _e24 = _step28.value;

					identity = f(identity, _e24);
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

			return identity;
		}
	}, {
		key: "scan",
		value: function scan(f, identity) {

			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var accum, _iteratorNormalCompletion29, _didIteratorError29, _iteratorError29, _iterator29, _step29, _e25;

						return regeneratorRuntime.wrap(function value$(_context20) {
							while (1) {
								switch (_context20.prev = _context20.next) {
									case 0:
										accum = identity;
										_iteratorNormalCompletion29 = true;
										_didIteratorError29 = false;
										_iteratorError29 = undefined;
										_context20.prev = 4;
										_iterator29 = self.apply()[Symbol.iterator]();

									case 6:
										if (_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done) {
											_context20.next = 14;
											break;
										}

										_e25 = _step29.value;

										accum = f(accum, _e25);
										_context20.next = 11;
										return accum;

									case 11:
										_iteratorNormalCompletion29 = true;
										_context20.next = 6;
										break;

									case 14:
										_context20.next = 20;
										break;

									case 16:
										_context20.prev = 16;
										_context20.t0 = _context20["catch"](4);
										_didIteratorError29 = true;
										_iteratorError29 = _context20.t0;

									case 20:
										_context20.prev = 20;
										_context20.prev = 21;

										if (!_iteratorNormalCompletion29 && _iterator29.return) {
											_iterator29.return();
										}

									case 23:
										_context20.prev = 23;

										if (!_didIteratorError29) {
											_context20.next = 26;
											break;
										}

										throw _iteratorError29;

									case 26:
										return _context20.finish(23);

									case 27:
										return _context20.finish(20);

									case 28:
									case "end":
										return _context20.stop();
								}
							}
						}, value, this, [[4, 16, 20, 28], [21,, 23, 27]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "groupBy",
		value: function groupBy(f) {
			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var map, _iteratorNormalCompletion30, _didIteratorError30, _iteratorError30, _iterator30, _step30, _e26, k, v, _iteratorNormalCompletion31, _didIteratorError31, _iteratorError31, _iterator31, _step31, _step31$value, key, elements;

						return regeneratorRuntime.wrap(function value$(_context21) {
							while (1) {
								switch (_context21.prev = _context21.next) {
									case 0:
										map = new Map();
										_iteratorNormalCompletion30 = true;
										_didIteratorError30 = false;
										_iteratorError30 = undefined;
										_context21.prev = 4;

										for (_iterator30 = self.apply()[Symbol.iterator](); !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
											_e26 = _step30.value;
											k = f(_e26);

											if (!map.has(k)) {
												map.set(k, [_e26]);
											} else {
												v = map.get(k);

												v.push(_e26);
											}
										}

										_context21.next = 12;
										break;

									case 8:
										_context21.prev = 8;
										_context21.t0 = _context21["catch"](4);
										_didIteratorError30 = true;
										_iteratorError30 = _context21.t0;

									case 12:
										_context21.prev = 12;
										_context21.prev = 13;

										if (!_iteratorNormalCompletion30 && _iterator30.return) {
											_iterator30.return();
										}

									case 15:
										_context21.prev = 15;

										if (!_didIteratorError30) {
											_context21.next = 18;
											break;
										}

										throw _iteratorError30;

									case 18:
										return _context21.finish(15);

									case 19:
										return _context21.finish(12);

									case 20:
										_iteratorNormalCompletion31 = true;
										_didIteratorError31 = false;
										_iteratorError31 = undefined;
										_context21.prev = 23;
										_iterator31 = map.entries()[Symbol.iterator]();

									case 25:
										if (_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done) {
											_context21.next = 34;
											break;
										}

										_step31$value = _slicedToArray(_step31.value, 2);
										key = _step31$value[0];
										elements = _step31$value[1];
										_context21.next = 31;
										return { key: key, elements: elements };

									case 31:
										_iteratorNormalCompletion31 = true;
										_context21.next = 25;
										break;

									case 34:
										_context21.next = 40;
										break;

									case 36:
										_context21.prev = 36;
										_context21.t1 = _context21["catch"](23);
										_didIteratorError31 = true;
										_iteratorError31 = _context21.t1;

									case 40:
										_context21.prev = 40;
										_context21.prev = 41;

										if (!_iteratorNormalCompletion31 && _iterator31.return) {
											_iterator31.return();
										}

									case 43:
										_context21.prev = 43;

										if (!_didIteratorError31) {
											_context21.next = 46;
											break;
										}

										throw _iteratorError31;

									case 46:
										return _context21.finish(43);

									case 47:
										return _context21.finish(40);

									case 48:
									case "end":
										return _context21.stop();
								}
							}
						}, value, this, [[4, 8, 12, 20], [13,, 15, 19], [23, 36, 40, 48], [41,, 43, 47]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "onErrorResumeNext",
		value: function onErrorResumeNext() {
			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var generator, obj;
						return regeneratorRuntime.wrap(function value$(_context22) {
							while (1) {
								switch (_context22.prev = _context22.next) {
									case 0:
										generator = self.apply();

									case 1:
										if (!true) {
											_context22.next = 14;
											break;
										}

										_context22.prev = 2;
										obj = generator.next();

										if (!obj.done) {
											_context22.next = 6;
											break;
										}

										return _context22.abrupt("return");

									case 6:
										_context22.next = 8;
										return obj.value;

									case 8:
										_context22.next = 12;
										break;

									case 10:
										_context22.prev = 10;
										_context22.t0 = _context22["catch"](2);

									case 12:
										_context22.next = 1;
										break;

									case 14:
									case "end":
										return _context22.stop();
								}
							}
						}, value, this, [[2, 10]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "catch",
		value: function _catch(other) {
			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var generator, obj, _iteratorNormalCompletion32, _didIteratorError32, _iteratorError32, _iterator32, _step32, z;

						return regeneratorRuntime.wrap(function value$(_context23) {
							while (1) {
								switch (_context23.prev = _context23.next) {
									case 0:
										generator = self.apply();

									case 1:
										if (!true) {
											_context23.next = 41;
											break;
										}

										_context23.prev = 2;
										obj = generator.next();

										if (!obj.done) {
											_context23.next = 6;
											break;
										}

										return _context23.abrupt("return");

									case 6:
										_context23.next = 8;
										return obj.value;

									case 8:
										_context23.next = 39;
										break;

									case 10:
										_context23.prev = 10;
										_context23.t0 = _context23["catch"](2);
										_iteratorNormalCompletion32 = true;
										_didIteratorError32 = false;
										_iteratorError32 = undefined;
										_context23.prev = 15;
										_iterator32 = other.apply()[Symbol.iterator]();

									case 17:
										if (_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done) {
											_context23.next = 25;
											break;
										}

										z = _step32.value;
										_context23.next = 21;
										return z;

									case 21:
										self.apply();

									case 22:
										_iteratorNormalCompletion32 = true;
										_context23.next = 17;
										break;

									case 25:
										_context23.next = 31;
										break;

									case 27:
										_context23.prev = 27;
										_context23.t1 = _context23["catch"](15);
										_didIteratorError32 = true;
										_iteratorError32 = _context23.t1;

									case 31:
										_context23.prev = 31;
										_context23.prev = 32;

										if (!_iteratorNormalCompletion32 && _iterator32.return) {
											_iterator32.return();
										}

									case 34:
										_context23.prev = 34;

										if (!_didIteratorError32) {
											_context23.next = 37;
											break;
										}

										throw _iteratorError32;

									case 37:
										return _context23.finish(34);

									case 38:
										return _context23.finish(31);

									case 39:
										_context23.next = 1;
										break;

									case 41:
									case "end":
										return _context23.stop();
								}
							}
						}, value, this, [[2, 10], [15, 27, 31, 39], [32,, 34, 38]]);
					})
				}
			});

			return lazy;
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
			var _iteratorNormalCompletion33 = true;
			var _didIteratorError33 = false;
			var _iteratorError33 = undefined;

			try {
				for (var _iterator33 = this.apply()[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
					var _e27 = _step33.value;

					if (f(_e27)) return true;
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

			return false;
		}
	}, {
		key: "all",
		value: function all(f) {
			var _iteratorNormalCompletion34 = true;
			var _didIteratorError34 = false;
			var _iteratorError34 = undefined;

			try {
				for (var _iterator34 = this.apply()[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
					var _e28 = _step34.value;

					if (!f(_e28)) return false;
				}
			} catch (err) {
				_didIteratorError34 = true;
				_iteratorError34 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion34 && _iterator34.return) {
						_iterator34.return();
					}
				} finally {
					if (_didIteratorError34) {
						throw _iteratorError34;
					}
				}
			}

			return true;
		}
	}, {
		key: "countWhere",
		value: function countWhere(f) {
			var total = 0;
			var _iteratorNormalCompletion35 = true;
			var _didIteratorError35 = false;
			var _iteratorError35 = undefined;

			try {
				for (var _iterator35 = this.apply()[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
					var _e29 = _step35.value;

					if (f(_e29)) {
						++total;
					}
				}
			} catch (err) {
				_didIteratorError35 = true;
				_iteratorError35 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion35 && _iterator35.return) {
						_iterator35.return();
					}
				} finally {
					if (_didIteratorError35) {
						throw _iteratorError35;
					}
				}
			}

			return total;
		}
	}, {
		key: "minimum",
		value: function minimum() {
			var minimum;
			var _iteratorNormalCompletion36 = true;
			var _didIteratorError36 = false;
			var _iteratorError36 = undefined;

			try {
				for (var _iterator36 = this.apply()[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
					var _e30 = _step36.value;

					if (!minimum) {
						minimum = _e30;
						continue;
					}

					if (_e30 < minimum) minimum = _e30;
				}
			} catch (err) {
				_didIteratorError36 = true;
				_iteratorError36 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion36 && _iterator36.return) {
						_iterator36.return();
					}
				} finally {
					if (_didIteratorError36) {
						throw _iteratorError36;
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
			var _iteratorNormalCompletion37 = true;
			var _didIteratorError37 = false;
			var _iteratorError37 = undefined;

			try {
				for (var _iterator37 = this.apply()[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
					var _e31 = _step37.value;

					if (!maximum) {
						maximum = _e31;
						continue;
					}

					if (_e31 > maximum) maximum = _e31;
				}
			} catch (err) {
				_didIteratorError37 = true;
				_iteratorError37 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion37 && _iterator37.return) {
						_iterator37.return();
					}
				} finally {
					if (_didIteratorError37) {
						throw _iteratorError37;
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
			var _iteratorNormalCompletion38 = true;
			var _didIteratorError38 = false;
			var _iteratorError38 = undefined;

			try {
				for (var _iterator38 = this.apply()[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
					var v = _step38.value;

					n += 1;
				}
			} catch (err) {
				_didIteratorError38 = true;
				_iteratorError38 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion38 && _iterator38.return) {
						_iterator38.return();
					}
				} finally {
					if (_didIteratorError38) {
						throw _iteratorError38;
					}
				}
			}

			return n;
		}
	}]);

	return LazySource;
})();