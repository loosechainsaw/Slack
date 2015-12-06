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
	}, {
		key: Symbol.iterator,
		value: function value() {
			return this.apply();
		}
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
	}, {
		key: Symbol.iterator,
		value: function value() {
			return this.apply();
		}
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
	}, {
		key: Symbol.iterator,
		value: function value() {
			return this.apply();
		}
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
	}, {
		key: Symbol.iterator,
		value: function value() {
			return this.apply();
		}
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
	}, {
		key: Symbol.iterator,
		value: function value() {
			return this.apply();
		}
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
		key: Symbol.iterator,
		value: function value() {
			return this.apply();
		}
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
		key: "union",
		value: function union(other) {
			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var added, _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _e13, _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, _e14, _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19, _e15;

						return regeneratorRuntime.wrap(function value$(_context15) {
							while (1) {
								switch (_context15.prev = _context15.next) {
									case 0:
										added = new Map();
										_iteratorNormalCompletion17 = true;
										_didIteratorError17 = false;
										_iteratorError17 = undefined;
										_context15.prev = 4;

										for (_iterator17 = self.apply()[Symbol.iterator](); !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
											_e13 = _step17.value;

											if (!added.get(_e13)) {
												added.set(_e13, _e13);
											}
										}
										_context15.next = 12;
										break;

									case 8:
										_context15.prev = 8;
										_context15.t0 = _context15["catch"](4);
										_didIteratorError17 = true;
										_iteratorError17 = _context15.t0;

									case 12:
										_context15.prev = 12;
										_context15.prev = 13;

										if (!_iteratorNormalCompletion17 && _iterator17.return) {
											_iterator17.return();
										}

									case 15:
										_context15.prev = 15;

										if (!_didIteratorError17) {
											_context15.next = 18;
											break;
										}

										throw _iteratorError17;

									case 18:
										return _context15.finish(15);

									case 19:
										return _context15.finish(12);

									case 20:
										_iteratorNormalCompletion18 = true;
										_didIteratorError18 = false;
										_iteratorError18 = undefined;
										_context15.prev = 23;
										for (_iterator18 = other[Symbol.iterator](); !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
											_e14 = _step18.value;

											if (!added.get(_e14)) {
												added.set(_e14, _e14);
											}
										}
										_context15.next = 31;
										break;

									case 27:
										_context15.prev = 27;
										_context15.t1 = _context15["catch"](23);
										_didIteratorError18 = true;
										_iteratorError18 = _context15.t1;

									case 31:
										_context15.prev = 31;
										_context15.prev = 32;

										if (!_iteratorNormalCompletion18 && _iterator18.return) {
											_iterator18.return();
										}

									case 34:
										_context15.prev = 34;

										if (!_didIteratorError18) {
											_context15.next = 37;
											break;
										}

										throw _iteratorError18;

									case 37:
										return _context15.finish(34);

									case 38:
										return _context15.finish(31);

									case 39:
										_iteratorNormalCompletion19 = true;
										_didIteratorError19 = false;
										_iteratorError19 = undefined;
										_context15.prev = 42;
										_iterator19 = added.values()[Symbol.iterator]();

									case 44:
										if (_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done) {
											_context15.next = 51;
											break;
										}

										_e15 = _step19.value;
										_context15.next = 48;
										return _e15;

									case 48:
										_iteratorNormalCompletion19 = true;
										_context15.next = 44;
										break;

									case 51:
										_context15.next = 57;
										break;

									case 53:
										_context15.prev = 53;
										_context15.t2 = _context15["catch"](42);
										_didIteratorError19 = true;
										_iteratorError19 = _context15.t2;

									case 57:
										_context15.prev = 57;
										_context15.prev = 58;

										if (!_iteratorNormalCompletion19 && _iterator19.return) {
											_iterator19.return();
										}

									case 60:
										_context15.prev = 60;

										if (!_didIteratorError19) {
											_context15.next = 63;
											break;
										}

										throw _iteratorError19;

									case 63:
										return _context15.finish(60);

									case 64:
										return _context15.finish(57);

									case 65:
									case "end":
										return _context15.stop();
								}
							}
						}, value, this, [[4, 8, 12, 20], [13,, 15, 19], [23, 27, 31, 39], [32,, 34, 38], [42, 53, 57, 65], [58,, 60, 64]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "unionLazy",
		value: function unionLazy(other) {
			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var added, _iteratorNormalCompletion20, _didIteratorError20, _iteratorError20, _iterator20, _step20, _e16, _iteratorNormalCompletion21, _didIteratorError21, _iteratorError21, _iterator21, _step21, _e17, _iteratorNormalCompletion22, _didIteratorError22, _iteratorError22, _iterator22, _step22, _e18;

						return regeneratorRuntime.wrap(function value$(_context16) {
							while (1) {
								switch (_context16.prev = _context16.next) {
									case 0:
										added = new Map();
										_iteratorNormalCompletion20 = true;
										_didIteratorError20 = false;
										_iteratorError20 = undefined;
										_context16.prev = 4;

										for (_iterator20 = self.apply()[Symbol.iterator](); !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
											_e16 = _step20.value;

											if (!added.get(_e16)) {
												added.set(_e16, _e16);
											}
										}
										_context16.next = 12;
										break;

									case 8:
										_context16.prev = 8;
										_context16.t0 = _context16["catch"](4);
										_didIteratorError20 = true;
										_iteratorError20 = _context16.t0;

									case 12:
										_context16.prev = 12;
										_context16.prev = 13;

										if (!_iteratorNormalCompletion20 && _iterator20.return) {
											_iterator20.return();
										}

									case 15:
										_context16.prev = 15;

										if (!_didIteratorError20) {
											_context16.next = 18;
											break;
										}

										throw _iteratorError20;

									case 18:
										return _context16.finish(15);

									case 19:
										return _context16.finish(12);

									case 20:
										_iteratorNormalCompletion21 = true;
										_didIteratorError21 = false;
										_iteratorError21 = undefined;
										_context16.prev = 23;
										for (_iterator21 = other.apply()[Symbol.iterator](); !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
											_e17 = _step21.value;

											if (!added.get(_e17)) {
												added.set(_e17, _e17);
											}
										}
										_context16.next = 31;
										break;

									case 27:
										_context16.prev = 27;
										_context16.t1 = _context16["catch"](23);
										_didIteratorError21 = true;
										_iteratorError21 = _context16.t1;

									case 31:
										_context16.prev = 31;
										_context16.prev = 32;

										if (!_iteratorNormalCompletion21 && _iterator21.return) {
											_iterator21.return();
										}

									case 34:
										_context16.prev = 34;

										if (!_didIteratorError21) {
											_context16.next = 37;
											break;
										}

										throw _iteratorError21;

									case 37:
										return _context16.finish(34);

									case 38:
										return _context16.finish(31);

									case 39:
										_iteratorNormalCompletion22 = true;
										_didIteratorError22 = false;
										_iteratorError22 = undefined;
										_context16.prev = 42;
										_iterator22 = added.values()[Symbol.iterator]();

									case 44:
										if (_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done) {
											_context16.next = 51;
											break;
										}

										_e18 = _step22.value;
										_context16.next = 48;
										return _e18;

									case 48:
										_iteratorNormalCompletion22 = true;
										_context16.next = 44;
										break;

									case 51:
										_context16.next = 57;
										break;

									case 53:
										_context16.prev = 53;
										_context16.t2 = _context16["catch"](42);
										_didIteratorError22 = true;
										_iteratorError22 = _context16.t2;

									case 57:
										_context16.prev = 57;
										_context16.prev = 58;

										if (!_iteratorNormalCompletion22 && _iterator22.return) {
											_iterator22.return();
										}

									case 60:
										_context16.prev = 60;

										if (!_didIteratorError22) {
											_context16.next = 63;
											break;
										}

										throw _iteratorError22;

									case 63:
										return _context16.finish(60);

									case 64:
										return _context16.finish(57);

									case 65:
									case "end":
										return _context16.stop();
								}
							}
						}, value, this, [[4, 8, 12, 20], [13,, 15, 19], [23, 27, 31, 39], [32,, 34, 38], [42, 53, 57, 65], [58,, 60, 64]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "take",
		value: function take(n) {

			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var total, _iteratorNormalCompletion23, _didIteratorError23, _iteratorError23, _iterator23, _step23, _e19;

						return regeneratorRuntime.wrap(function value$(_context17) {
							while (1) {
								switch (_context17.prev = _context17.next) {
									case 0:
										total = 0;
										_iteratorNormalCompletion23 = true;
										_didIteratorError23 = false;
										_iteratorError23 = undefined;
										_context17.prev = 4;
										_iterator23 = self.apply()[Symbol.iterator]();

									case 6:
										if (_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done) {
											_context17.next = 14;
											break;
										}

										_e19 = _step23.value;

										if (!(++total <= n)) {
											_context17.next = 11;
											break;
										}

										_context17.next = 11;
										return _e19;

									case 11:
										_iteratorNormalCompletion23 = true;
										_context17.next = 6;
										break;

									case 14:
										_context17.next = 20;
										break;

									case 16:
										_context17.prev = 16;
										_context17.t0 = _context17["catch"](4);
										_didIteratorError23 = true;
										_iteratorError23 = _context17.t0;

									case 20:
										_context17.prev = 20;
										_context17.prev = 21;

										if (!_iteratorNormalCompletion23 && _iterator23.return) {
											_iterator23.return();
										}

									case 23:
										_context17.prev = 23;

										if (!_didIteratorError23) {
											_context17.next = 26;
											break;
										}

										throw _iteratorError23;

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
			});

			return lazy;
		}
	}, {
		key: "takeWhile",
		value: function takeWhile(f) {

			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var _iteratorNormalCompletion24, _didIteratorError24, _iteratorError24, _iterator24, _step24, _e20;

						return regeneratorRuntime.wrap(function value$(_context18) {
							while (1) {
								switch (_context18.prev = _context18.next) {
									case 0:
										_iteratorNormalCompletion24 = true;
										_didIteratorError24 = false;
										_iteratorError24 = undefined;
										_context18.prev = 3;
										_iterator24 = self.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done) {
											_context18.next = 16;
											break;
										}

										_e20 = _step24.value;

										if (!f(_e20)) {
											_context18.next = 12;
											break;
										}

										_context18.next = 10;
										return _e20;

									case 10:
										_context18.next = 13;
										break;

									case 12:
										return _context18.abrupt("return");

									case 13:
										_iteratorNormalCompletion24 = true;
										_context18.next = 5;
										break;

									case 16:
										_context18.next = 22;
										break;

									case 18:
										_context18.prev = 18;
										_context18.t0 = _context18["catch"](3);
										_didIteratorError24 = true;
										_iteratorError24 = _context18.t0;

									case 22:
										_context18.prev = 22;
										_context18.prev = 23;

										if (!_iteratorNormalCompletion24 && _iterator24.return) {
											_iterator24.return();
										}

									case 25:
										_context18.prev = 25;

										if (!_didIteratorError24) {
											_context18.next = 28;
											break;
										}

										throw _iteratorError24;

									case 28:
										return _context18.finish(25);

									case 29:
										return _context18.finish(22);

									case 30:
									case "end":
										return _context18.stop();
								}
							}
						}, value, this, [[3, 18, 22, 30], [23,, 25, 29]]);
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
						var total, _iteratorNormalCompletion25, _didIteratorError25, _iteratorError25, _iterator25, _step25, _e21;

						return regeneratorRuntime.wrap(function value$(_context19) {
							while (1) {
								switch (_context19.prev = _context19.next) {
									case 0:
										total = 0;
										_iteratorNormalCompletion25 = true;
										_didIteratorError25 = false;
										_iteratorError25 = undefined;
										_context19.prev = 4;
										_iterator25 = self.apply()[Symbol.iterator]();

									case 6:
										if (_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done) {
											_context19.next = 14;
											break;
										}

										_e21 = _step25.value;

										if (!(++total > n)) {
											_context19.next = 11;
											break;
										}

										_context19.next = 11;
										return _e21;

									case 11:
										_iteratorNormalCompletion25 = true;
										_context19.next = 6;
										break;

									case 14:
										_context19.next = 20;
										break;

									case 16:
										_context19.prev = 16;
										_context19.t0 = _context19["catch"](4);
										_didIteratorError25 = true;
										_iteratorError25 = _context19.t0;

									case 20:
										_context19.prev = 20;
										_context19.prev = 21;

										if (!_iteratorNormalCompletion25 && _iterator25.return) {
											_iterator25.return();
										}

									case 23:
										_context19.prev = 23;

										if (!_didIteratorError25) {
											_context19.next = 26;
											break;
										}

										throw _iteratorError25;

									case 26:
										return _context19.finish(23);

									case 27:
										return _context19.finish(20);

									case 28:
									case "end":
										return _context19.stop();
								}
							}
						}, value, this, [[4, 16, 20, 28], [21,, 23, 27]]);
					})
				}
			});

			return lazy;
		}
	}, {
		key: "skipWhile",
		value: function skipWhile(f) {

			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var ignore, _iteratorNormalCompletion26, _didIteratorError26, _iteratorError26, _iterator26, _step26, _e22;

						return regeneratorRuntime.wrap(function value$(_context20) {
							while (1) {
								switch (_context20.prev = _context20.next) {
									case 0:
										ignore = true;
										_iteratorNormalCompletion26 = true;
										_didIteratorError26 = false;
										_iteratorError26 = undefined;
										_context20.prev = 4;
										_iterator26 = self.apply()[Symbol.iterator]();

									case 6:
										if (_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done) {
											_context20.next = 15;
											break;
										}

										_e22 = _step26.value;

										if (ignore) ignore = f(_e22);

										if (ignore) {
											_context20.next = 12;
											break;
										}

										_context20.next = 12;
										return _e22;

									case 12:
										_iteratorNormalCompletion26 = true;
										_context20.next = 6;
										break;

									case 15:
										_context20.next = 21;
										break;

									case 17:
										_context20.prev = 17;
										_context20.t0 = _context20["catch"](4);
										_didIteratorError26 = true;
										_iteratorError26 = _context20.t0;

									case 21:
										_context20.prev = 21;
										_context20.prev = 22;

										if (!_iteratorNormalCompletion26 && _iterator26.return) {
											_iterator26.return();
										}

									case 24:
										_context20.prev = 24;

										if (!_didIteratorError26) {
											_context20.next = 27;
											break;
										}

										throw _iteratorError26;

									case 27:
										return _context20.finish(24);

									case 28:
										return _context20.finish(21);

									case 29:
									case "end":
										return _context20.stop();
								}
							}
						}, value, this, [[4, 17, 21, 29], [22,, 24, 28]]);
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
							var total, _iteratorNormalCompletion27, _didIteratorError27, _iteratorError27, _iterator27, _step27, _e23;

							return regeneratorRuntime.wrap(function value$(_context21) {
								while (1) {
									switch (_context21.prev = _context21.next) {
										case 0:
											total = 0;
											_iteratorNormalCompletion27 = true;
											_didIteratorError27 = false;
											_iteratorError27 = undefined;
											_context21.prev = 4;
											_iterator27 = self.apply()[Symbol.iterator]();

										case 6:
											if (_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done) {
												_context21.next = 14;
												break;
											}

											_e23 = _step27.value;

											if (!(++total <= n)) {
												_context21.next = 11;
												break;
											}

											_context21.next = 11;
											return _e23;

										case 11:
											_iteratorNormalCompletion27 = true;
											_context21.next = 6;
											break;

										case 14:
											_context21.next = 20;
											break;

										case 16:
											_context21.prev = 16;
											_context21.t0 = _context21["catch"](4);
											_didIteratorError27 = true;
											_iteratorError27 = _context21.t0;

										case 20:
											_context21.prev = 20;
											_context21.prev = 21;

											if (!_iteratorNormalCompletion27 && _iterator27.return) {
												_iterator27.return();
											}

										case 23:
											_context21.prev = 23;

											if (!_didIteratorError27) {
												_context21.next = 26;
												break;
											}

											throw _iteratorError27;

										case 26:
											return _context21.finish(23);

										case 27:
											return _context21.finish(20);

										case 28:
										case "end":
											return _context21.stop();
									}
								}
							}, value, this, [[4, 16, 20, 28], [21,, 23, 27]]);
						})
					}
				}), item2: Object.create(self, {
					apply: {
						value: regeneratorRuntime.mark(function value() {
							var total, _iteratorNormalCompletion28, _didIteratorError28, _iteratorError28, _iterator28, _step28, _e24;

							return regeneratorRuntime.wrap(function value$(_context22) {
								while (1) {
									switch (_context22.prev = _context22.next) {
										case 0:
											total = 0;
											_iteratorNormalCompletion28 = true;
											_didIteratorError28 = false;
											_iteratorError28 = undefined;
											_context22.prev = 4;
											_iterator28 = self.apply()[Symbol.iterator]();

										case 6:
											if (_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done) {
												_context22.next = 14;
												break;
											}

											_e24 = _step28.value;

											if (!(++total > n)) {
												_context22.next = 11;
												break;
											}

											_context22.next = 11;
											return _e24;

										case 11:
											_iteratorNormalCompletion28 = true;
											_context22.next = 6;
											break;

										case 14:
											_context22.next = 20;
											break;

										case 16:
											_context22.prev = 16;
											_context22.t0 = _context22["catch"](4);
											_didIteratorError28 = true;
											_iteratorError28 = _context22.t0;

										case 20:
											_context22.prev = 20;
											_context22.prev = 21;

											if (!_iteratorNormalCompletion28 && _iterator28.return) {
												_iterator28.return();
											}

										case 23:
											_context22.prev = 23;

											if (!_didIteratorError28) {
												_context22.next = 26;
												break;
											}

											throw _iteratorError28;

										case 26:
											return _context22.finish(23);

										case 27:
											return _context22.finish(20);

										case 28:
										case "end":
											return _context22.stop();
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
			var _iteratorNormalCompletion29 = true;
			var _didIteratorError29 = false;
			var _iteratorError29 = undefined;

			try {
				for (var _iterator29 = this.apply()[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
					var _e25 = _step29.value;

					map.set(k(_e25), d(_e25));
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

			return map;
		}
	}, {
		key: "toArray",
		value: function toArray() {
			var results = [];
			var _iteratorNormalCompletion30 = true;
			var _didIteratorError30 = false;
			var _iteratorError30 = undefined;

			try {
				for (var _iterator30 = this.apply()[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
					var _e26 = _step30.value;

					results.push(_e26);
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

			return results;
		}
	}, {
		key: "enumerate",
		value: regeneratorRuntime.mark(function enumerate() {
			var _iteratorNormalCompletion31, _didIteratorError31, _iteratorError31, _iterator31, _step31, _e27;

			return regeneratorRuntime.wrap(function enumerate$(_context23) {
				while (1) {
					switch (_context23.prev = _context23.next) {
						case 0:
							_iteratorNormalCompletion31 = true;
							_didIteratorError31 = false;
							_iteratorError31 = undefined;
							_context23.prev = 3;
							_iterator31 = this.apply()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done) {
								_context23.next = 12;
								break;
							}

							_e27 = _step31.value;
							_context23.next = 9;
							return _e27;

						case 9:
							_iteratorNormalCompletion31 = true;
							_context23.next = 5;
							break;

						case 12:
							_context23.next = 18;
							break;

						case 14:
							_context23.prev = 14;
							_context23.t0 = _context23["catch"](3);
							_didIteratorError31 = true;
							_iteratorError31 = _context23.t0;

						case 18:
							_context23.prev = 18;
							_context23.prev = 19;

							if (!_iteratorNormalCompletion31 && _iterator31.return) {
								_iterator31.return();
							}

						case 21:
							_context23.prev = 21;

							if (!_didIteratorError31) {
								_context23.next = 24;
								break;
							}

							throw _iteratorError31;

						case 24:
							return _context23.finish(21);

						case 25:
							return _context23.finish(18);

						case 26:
						case "end":
							return _context23.stop();
					}
				}
			}, enumerate, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		})
	}, {
		key: "first",
		value: function first() {
			var _iteratorNormalCompletion32 = true;
			var _didIteratorError32 = false;
			var _iteratorError32 = undefined;

			try {
				for (var _iterator32 = this.apply()[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
					var _e28 = _step32.value;

					return _e28;
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

			throw new Error("No items in list");
		}
	}, {
		key: "firstOrElse",
		value: function firstOrElse(d) {
			var _iteratorNormalCompletion33 = true;
			var _didIteratorError33 = false;
			var _iteratorError33 = undefined;

			try {
				for (var _iterator33 = this.apply()[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
					var _e29 = _step33.value;

					return _e29;
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

			return d;
		}
	}, {
		key: "last",
		value: function last() {
			var element = undefined;
			var _iteratorNormalCompletion34 = true;
			var _didIteratorError34 = false;
			var _iteratorError34 = undefined;

			try {
				for (var _iterator34 = this.apply()[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
					var _e30 = _step34.value;

					element = _e30;
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

			if (element) return element;

			throw new Error("No items in list");
		}
	}, {
		key: "lastOrElse",
		value: function lastOrElse(d) {
			var element = undefined;
			var _iteratorNormalCompletion35 = true;
			var _didIteratorError35 = false;
			var _iteratorError35 = undefined;

			try {
				for (var _iterator35 = this.apply()[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
					var _e31 = _step35.value;

					element = _e31;
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

			if (element) return element;

			return d;
		}
	}, {
		key: "foldl",
		value: function foldl(f, identity) {
			var _iteratorNormalCompletion36 = true;
			var _didIteratorError36 = false;
			var _iteratorError36 = undefined;

			try {
				for (var _iterator36 = this.apply()[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
					var _e32 = _step36.value;

					identity = f(identity, _e32);
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

			return identity;
		}
	}, {
		key: "scan",
		value: function scan(f, identity) {

			var self = this;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var accum, _iteratorNormalCompletion37, _didIteratorError37, _iteratorError37, _iterator37, _step37, _e33;

						return regeneratorRuntime.wrap(function value$(_context24) {
							while (1) {
								switch (_context24.prev = _context24.next) {
									case 0:
										accum = identity;
										_iteratorNormalCompletion37 = true;
										_didIteratorError37 = false;
										_iteratorError37 = undefined;
										_context24.prev = 4;
										_iterator37 = self.apply()[Symbol.iterator]();

									case 6:
										if (_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done) {
											_context24.next = 14;
											break;
										}

										_e33 = _step37.value;

										accum = f(accum, _e33);
										_context24.next = 11;
										return accum;

									case 11:
										_iteratorNormalCompletion37 = true;
										_context24.next = 6;
										break;

									case 14:
										_context24.next = 20;
										break;

									case 16:
										_context24.prev = 16;
										_context24.t0 = _context24["catch"](4);
										_didIteratorError37 = true;
										_iteratorError37 = _context24.t0;

									case 20:
										_context24.prev = 20;
										_context24.prev = 21;

										if (!_iteratorNormalCompletion37 && _iterator37.return) {
											_iterator37.return();
										}

									case 23:
										_context24.prev = 23;

										if (!_didIteratorError37) {
											_context24.next = 26;
											break;
										}

										throw _iteratorError37;

									case 26:
										return _context24.finish(23);

									case 27:
										return _context24.finish(20);

									case 28:
									case "end":
										return _context24.stop();
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
						var map, _iteratorNormalCompletion38, _didIteratorError38, _iteratorError38, _iterator38, _step38, _e34, k, v, _iteratorNormalCompletion39, _didIteratorError39, _iteratorError39, _iterator39, _step39, _step39$value, key, elements;

						return regeneratorRuntime.wrap(function value$(_context25) {
							while (1) {
								switch (_context25.prev = _context25.next) {
									case 0:
										map = new Map();
										_iteratorNormalCompletion38 = true;
										_didIteratorError38 = false;
										_iteratorError38 = undefined;
										_context25.prev = 4;

										for (_iterator38 = self.apply()[Symbol.iterator](); !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
											_e34 = _step38.value;
											k = f(_e34);

											if (!map.has(k)) {
												map.set(k, [_e34]);
											} else {
												v = map.get(k);

												v.push(_e34);
											}
										}

										_context25.next = 12;
										break;

									case 8:
										_context25.prev = 8;
										_context25.t0 = _context25["catch"](4);
										_didIteratorError38 = true;
										_iteratorError38 = _context25.t0;

									case 12:
										_context25.prev = 12;
										_context25.prev = 13;

										if (!_iteratorNormalCompletion38 && _iterator38.return) {
											_iterator38.return();
										}

									case 15:
										_context25.prev = 15;

										if (!_didIteratorError38) {
											_context25.next = 18;
											break;
										}

										throw _iteratorError38;

									case 18:
										return _context25.finish(15);

									case 19:
										return _context25.finish(12);

									case 20:
										_iteratorNormalCompletion39 = true;
										_didIteratorError39 = false;
										_iteratorError39 = undefined;
										_context25.prev = 23;
										_iterator39 = map.entries()[Symbol.iterator]();

									case 25:
										if (_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done) {
											_context25.next = 34;
											break;
										}

										_step39$value = _slicedToArray(_step39.value, 2);
										key = _step39$value[0];
										elements = _step39$value[1];
										_context25.next = 31;
										return { key: key, elements: elements };

									case 31:
										_iteratorNormalCompletion39 = true;
										_context25.next = 25;
										break;

									case 34:
										_context25.next = 40;
										break;

									case 36:
										_context25.prev = 36;
										_context25.t1 = _context25["catch"](23);
										_didIteratorError39 = true;
										_iteratorError39 = _context25.t1;

									case 40:
										_context25.prev = 40;
										_context25.prev = 41;

										if (!_iteratorNormalCompletion39 && _iterator39.return) {
											_iterator39.return();
										}

									case 43:
										_context25.prev = 43;

										if (!_didIteratorError39) {
											_context25.next = 46;
											break;
										}

										throw _iteratorError39;

									case 46:
										return _context25.finish(43);

									case 47:
										return _context25.finish(40);

									case 48:
									case "end":
										return _context25.stop();
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
						return regeneratorRuntime.wrap(function value$(_context26) {
							while (1) {
								switch (_context26.prev = _context26.next) {
									case 0:
										generator = self.apply();

									case 1:
										if (!true) {
											_context26.next = 14;
											break;
										}

										_context26.prev = 2;
										obj = generator.next();

										if (!obj.done) {
											_context26.next = 6;
											break;
										}

										return _context26.abrupt("return");

									case 6:
										_context26.next = 8;
										return obj.value;

									case 8:
										_context26.next = 12;
										break;

									case 10:
										_context26.prev = 10;
										_context26.t0 = _context26["catch"](2);

									case 12:
										_context26.next = 1;
										break;

									case 14:
									case "end":
										return _context26.stop();
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
						var generator, obj, _iteratorNormalCompletion40, _didIteratorError40, _iteratorError40, _iterator40, _step40, z;

						return regeneratorRuntime.wrap(function value$(_context27) {
							while (1) {
								switch (_context27.prev = _context27.next) {
									case 0:
										generator = self.apply();

									case 1:
										if (!true) {
											_context27.next = 41;
											break;
										}

										_context27.prev = 2;
										obj = generator.next();

										if (!obj.done) {
											_context27.next = 6;
											break;
										}

										return _context27.abrupt("return");

									case 6:
										_context27.next = 8;
										return obj.value;

									case 8:
										_context27.next = 39;
										break;

									case 10:
										_context27.prev = 10;
										_context27.t0 = _context27["catch"](2);
										_iteratorNormalCompletion40 = true;
										_didIteratorError40 = false;
										_iteratorError40 = undefined;
										_context27.prev = 15;
										_iterator40 = other.apply()[Symbol.iterator]();

									case 17:
										if (_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done) {
											_context27.next = 25;
											break;
										}

										z = _step40.value;
										_context27.next = 21;
										return z;

									case 21:
										self.apply();

									case 22:
										_iteratorNormalCompletion40 = true;
										_context27.next = 17;
										break;

									case 25:
										_context27.next = 31;
										break;

									case 27:
										_context27.prev = 27;
										_context27.t1 = _context27["catch"](15);
										_didIteratorError40 = true;
										_iteratorError40 = _context27.t1;

									case 31:
										_context27.prev = 31;
										_context27.prev = 32;

										if (!_iteratorNormalCompletion40 && _iterator40.return) {
											_iterator40.return();
										}

									case 34:
										_context27.prev = 34;

										if (!_didIteratorError40) {
											_context27.next = 37;
											break;
										}

										throw _iteratorError40;

									case 37:
										return _context27.finish(34);

									case 38:
										return _context27.finish(31);

									case 39:
										_context27.next = 1;
										break;

									case 41:
									case "end":
										return _context27.stop();
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
		key: "avg",
		value: function avg() {
			var total = 0;
			var count = 0;
			var _iteratorNormalCompletion41 = true;
			var _didIteratorError41 = false;
			var _iteratorError41 = undefined;

			try {
				for (var _iterator41 = this.apply()[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
					var _e35 = _step41.value;

					total += _e35;
					count += 1;
				}
			} catch (err) {
				_didIteratorError41 = true;
				_iteratorError41 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion41 && _iterator41.return) {
						_iterator41.return();
					}
				} finally {
					if (_didIteratorError41) {
						throw _iteratorError41;
					}
				}
			}

			return total / count;
		}
	}, {
		key: "any",
		value: function any(f) {
			var _iteratorNormalCompletion42 = true;
			var _didIteratorError42 = false;
			var _iteratorError42 = undefined;

			try {
				for (var _iterator42 = this.apply()[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
					var _e36 = _step42.value;

					if (f(_e36)) return true;
				}
			} catch (err) {
				_didIteratorError42 = true;
				_iteratorError42 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion42 && _iterator42.return) {
						_iterator42.return();
					}
				} finally {
					if (_didIteratorError42) {
						throw _iteratorError42;
					}
				}
			}

			return false;
		}
	}, {
		key: "all",
		value: function all(f) {
			var _iteratorNormalCompletion43 = true;
			var _didIteratorError43 = false;
			var _iteratorError43 = undefined;

			try {
				for (var _iterator43 = this.apply()[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
					var _e37 = _step43.value;

					if (!f(_e37)) return false;
				}
			} catch (err) {
				_didIteratorError43 = true;
				_iteratorError43 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion43 && _iterator43.return) {
						_iterator43.return();
					}
				} finally {
					if (_didIteratorError43) {
						throw _iteratorError43;
					}
				}
			}

			return true;
		}
	}, {
		key: "countWhere",
		value: function countWhere(f) {
			var total = 0;
			var _iteratorNormalCompletion44 = true;
			var _didIteratorError44 = false;
			var _iteratorError44 = undefined;

			try {
				for (var _iterator44 = this.apply()[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
					var _e38 = _step44.value;

					if (f(_e38)) {
						++total;
					}
				}
			} catch (err) {
				_didIteratorError44 = true;
				_iteratorError44 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion44 && _iterator44.return) {
						_iterator44.return();
					}
				} finally {
					if (_didIteratorError44) {
						throw _iteratorError44;
					}
				}
			}

			return total;
		}
	}, {
		key: "minimum",
		value: function minimum() {
			var minimum;
			var _iteratorNormalCompletion45 = true;
			var _didIteratorError45 = false;
			var _iteratorError45 = undefined;

			try {
				for (var _iterator45 = this.apply()[Symbol.iterator](), _step45; !(_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done); _iteratorNormalCompletion45 = true) {
					var _e39 = _step45.value;

					if (!minimum) {
						minimum = _e39;
						continue;
					}

					if (_e39 < minimum) minimum = _e39;
				}
			} catch (err) {
				_didIteratorError45 = true;
				_iteratorError45 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion45 && _iterator45.return) {
						_iterator45.return();
					}
				} finally {
					if (_didIteratorError45) {
						throw _iteratorError45;
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
			var _iteratorNormalCompletion46 = true;
			var _didIteratorError46 = false;
			var _iteratorError46 = undefined;

			try {
				for (var _iterator46 = this.apply()[Symbol.iterator](), _step46; !(_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done); _iteratorNormalCompletion46 = true) {
					var _e40 = _step46.value;

					if (!maximum) {
						maximum = _e40;
						continue;
					}

					if (_e40 > maximum) maximum = _e40;
				}
			} catch (err) {
				_didIteratorError46 = true;
				_iteratorError46 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion46 && _iterator46.return) {
						_iterator46.return();
					}
				} finally {
					if (_didIteratorError46) {
						throw _iteratorError46;
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
			var _iteratorNormalCompletion47 = true;
			var _didIteratorError47 = false;
			var _iteratorError47 = undefined;

			try {
				for (var _iterator47 = this.apply()[Symbol.iterator](), _step47; !(_iteratorNormalCompletion47 = (_step47 = _iterator47.next()).done); _iteratorNormalCompletion47 = true) {
					var v = _step47.value;

					n += 1;
				}
			} catch (err) {
				_didIteratorError47 = true;
				_iteratorError47 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion47 && _iterator47.return) {
						_iterator47.return();
					}
				} finally {
					if (_didIteratorError47) {
						throw _iteratorError47;
					}
				}
			}

			return n;
		}
	}]);

	return LazySource;
})();