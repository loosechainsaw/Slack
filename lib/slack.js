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
	}]);

	return Slack;
})();

exports.default = Slack;

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
			return regeneratorRuntime.wrap(function apply$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							i = this.from;

						case 1:
							if (!(i <= this.to)) {
								_context.next = 7;
								break;
							}

							_context.next = 4;
							return i;

						case 4:
							++i;
							_context.next = 1;
							break;

						case 7:
						case "end":
							return _context.stop();
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

			return regeneratorRuntime.wrap(function apply$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_iteratorNormalCompletion = true;
							_didIteratorError = false;
							_iteratorError = undefined;
							_context2.prev = 3;
							_iterator = this.source[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
								_context2.next = 12;
								break;
							}

							element = _step.value;
							_context2.next = 9;
							return element;

						case 9:
							_iteratorNormalCompletion = true;
							_context2.next = 5;
							break;

						case 12:
							_context2.next = 18;
							break;

						case 14:
							_context2.prev = 14;
							_context2.t0 = _context2["catch"](3);
							_didIteratorError = true;
							_iteratorError = _context2.t0;

						case 18:
							_context2.prev = 18;
							_context2.prev = 19;

							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}

						case 21:
							_context2.prev = 21;

							if (!_didIteratorError) {
								_context2.next = 24;
								break;
							}

							throw _iteratorError;

						case 24:
							return _context2.finish(21);

						case 25:
							return _context2.finish(18);

						case 26:
						case "end":
							return _context2.stop();
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
		key: "map",
		value: function map(f) {

			var s = this.source;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, e;

						return regeneratorRuntime.wrap(function value$(_context3) {
							while (1) {
								switch (_context3.prev = _context3.next) {
									case 0:
										_iteratorNormalCompletion2 = true;
										_didIteratorError2 = false;
										_iteratorError2 = undefined;
										_context3.prev = 3;
										_iterator2 = s.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
											_context3.next = 12;
											break;
										}

										e = _step2.value;
										_context3.next = 9;
										return f(e);

									case 9:
										_iteratorNormalCompletion2 = true;
										_context3.next = 5;
										break;

									case 12:
										_context3.next = 18;
										break;

									case 14:
										_context3.prev = 14;
										_context3.t0 = _context3["catch"](3);
										_didIteratorError2 = true;
										_iteratorError2 = _context3.t0;

									case 18:
										_context3.prev = 18;
										_context3.prev = 19;

										if (!_iteratorNormalCompletion2 && _iterator2.return) {
											_iterator2.return();
										}

									case 21:
										_context3.prev = 21;

										if (!_didIteratorError2) {
											_context3.next = 24;
											break;
										}

										throw _iteratorError2;

									case 24:
										return _context3.finish(21);

									case 25:
										return _context3.finish(18);

									case 26:
									case "end":
										return _context3.stop();
								}
							}
						}, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
					})
				}
			});

			this.source = lazy;
			return lazy;
		}
	}, {
		key: "filter",
		value: function filter(f) {
			var s = this.source;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _e;

						return regeneratorRuntime.wrap(function value$(_context4) {
							while (1) {
								switch (_context4.prev = _context4.next) {
									case 0:
										_iteratorNormalCompletion3 = true;
										_didIteratorError3 = false;
										_iteratorError3 = undefined;
										_context4.prev = 3;
										_iterator3 = s.apply()[Symbol.iterator]();

									case 5:
										if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
											_context4.next = 13;
											break;
										}

										_e = _step3.value;

										if (!f(_e)) {
											_context4.next = 10;
											break;
										}

										_context4.next = 10;
										return _e;

									case 10:
										_iteratorNormalCompletion3 = true;
										_context4.next = 5;
										break;

									case 13:
										_context4.next = 19;
										break;

									case 15:
										_context4.prev = 15;
										_context4.t0 = _context4["catch"](3);
										_didIteratorError3 = true;
										_iteratorError3 = _context4.t0;

									case 19:
										_context4.prev = 19;
										_context4.prev = 20;

										if (!_iteratorNormalCompletion3 && _iterator3.return) {
											_iterator3.return();
										}

									case 22:
										_context4.prev = 22;

										if (!_didIteratorError3) {
											_context4.next = 25;
											break;
										}

										throw _iteratorError3;

									case 25:
										return _context4.finish(22);

									case 26:
										return _context4.finish(19);

									case 27:
									case "end":
										return _context4.stop();
								}
							}
						}, value, this, [[3, 15, 19, 27], [20,, 22, 26]]);
					})
				}
			});

			this.source = lazy;
			return lazy;
		}
	}, {
		key: "foreach",
		value: function foreach(f) {
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = this.source.apply()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var _e2 = _step4.value;

					f(_e2);
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}
		}
	}, {
		key: "take",
		value: function take(n) {

			var s = this.source;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var total, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _e3;

						return regeneratorRuntime.wrap(function value$(_context5) {
							while (1) {
								switch (_context5.prev = _context5.next) {
									case 0:
										total = 0;
										_iteratorNormalCompletion5 = true;
										_didIteratorError5 = false;
										_iteratorError5 = undefined;
										_context5.prev = 4;
										_iterator5 = s.apply()[Symbol.iterator]();

									case 6:
										if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
											_context5.next = 14;
											break;
										}

										_e3 = _step5.value;

										if (!(++total <= n)) {
											_context5.next = 11;
											break;
										}

										_context5.next = 11;
										return _e3;

									case 11:
										_iteratorNormalCompletion5 = true;
										_context5.next = 6;
										break;

									case 14:
										_context5.next = 20;
										break;

									case 16:
										_context5.prev = 16;
										_context5.t0 = _context5["catch"](4);
										_didIteratorError5 = true;
										_iteratorError5 = _context5.t0;

									case 20:
										_context5.prev = 20;
										_context5.prev = 21;

										if (!_iteratorNormalCompletion5 && _iterator5.return) {
											_iterator5.return();
										}

									case 23:
										_context5.prev = 23;

										if (!_didIteratorError5) {
											_context5.next = 26;
											break;
										}

										throw _iteratorError5;

									case 26:
										return _context5.finish(23);

									case 27:
										return _context5.finish(20);

									case 28:
									case "end":
										return _context5.stop();
								}
							}
						}, value, this, [[4, 16, 20, 28], [21,, 23, 27]]);
					})
				}
			});

			this.source = lazy;
			return lazy;
		}
	}, {
		key: "skip",
		value: function skip(n) {

			var s = this.source;
			var lazy = Object.create(this, {
				apply: {
					value: regeneratorRuntime.mark(function value() {
						var total, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _e4;

						return regeneratorRuntime.wrap(function value$(_context6) {
							while (1) {
								switch (_context6.prev = _context6.next) {
									case 0:
										total = 0;
										_iteratorNormalCompletion6 = true;
										_didIteratorError6 = false;
										_iteratorError6 = undefined;
										_context6.prev = 4;
										_iterator6 = s.apply()[Symbol.iterator]();

									case 6:
										if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
											_context6.next = 14;
											break;
										}

										_e4 = _step6.value;

										if (!(++total > n)) {
											_context6.next = 11;
											break;
										}

										_context6.next = 11;
										return _e4;

									case 11:
										_iteratorNormalCompletion6 = true;
										_context6.next = 6;
										break;

									case 14:
										_context6.next = 20;
										break;

									case 16:
										_context6.prev = 16;
										_context6.t0 = _context6["catch"](4);
										_didIteratorError6 = true;
										_iteratorError6 = _context6.t0;

									case 20:
										_context6.prev = 20;
										_context6.prev = 21;

										if (!_iteratorNormalCompletion6 && _iterator6.return) {
											_iterator6.return();
										}

									case 23:
										_context6.prev = 23;

										if (!_didIteratorError6) {
											_context6.next = 26;
											break;
										}

										throw _iteratorError6;

									case 26:
										return _context6.finish(23);

									case 27:
										return _context6.finish(20);

									case 28:
									case "end":
										return _context6.stop();
								}
							}
						}, value, this, [[4, 16, 20, 28], [21,, 23, 27]]);
					})
				}
			});

			this.source = lazy;
			return lazy;
		}
	}, {
		key: "partition",
		value: function partition(n) {
			var self = this;
			var s = self.source;
			var result = {
				item1: Object.create(self, {
					apply: {
						value: regeneratorRuntime.mark(function value() {
							var total, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _e5;

							return regeneratorRuntime.wrap(function value$(_context7) {
								while (1) {
									switch (_context7.prev = _context7.next) {
										case 0:
											total = 0;
											_iteratorNormalCompletion7 = true;
											_didIteratorError7 = false;
											_iteratorError7 = undefined;
											_context7.prev = 4;
											_iterator7 = s.apply()[Symbol.iterator]();

										case 6:
											if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
												_context7.next = 14;
												break;
											}

											_e5 = _step7.value;

											if (!(++total <= n)) {
												_context7.next = 11;
												break;
											}

											_context7.next = 11;
											return _e5;

										case 11:
											_iteratorNormalCompletion7 = true;
											_context7.next = 6;
											break;

										case 14:
											_context7.next = 20;
											break;

										case 16:
											_context7.prev = 16;
											_context7.t0 = _context7["catch"](4);
											_didIteratorError7 = true;
											_iteratorError7 = _context7.t0;

										case 20:
											_context7.prev = 20;
											_context7.prev = 21;

											if (!_iteratorNormalCompletion7 && _iterator7.return) {
												_iterator7.return();
											}

										case 23:
											_context7.prev = 23;

											if (!_didIteratorError7) {
												_context7.next = 26;
												break;
											}

											throw _iteratorError7;

										case 26:
											return _context7.finish(23);

										case 27:
											return _context7.finish(20);

										case 28:
										case "end":
											return _context7.stop();
									}
								}
							}, value, this, [[4, 16, 20, 28], [21,, 23, 27]]);
						})
					}
				}), item2: Object.create(self, {
					apply: {
						value: regeneratorRuntime.mark(function value() {
							var total, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _e6;

							return regeneratorRuntime.wrap(function value$(_context8) {
								while (1) {
									switch (_context8.prev = _context8.next) {
										case 0:
											total = 0;
											_iteratorNormalCompletion8 = true;
											_didIteratorError8 = false;
											_iteratorError8 = undefined;
											_context8.prev = 4;
											_iterator8 = s.apply()[Symbol.iterator]();

										case 6:
											if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
												_context8.next = 14;
												break;
											}

											_e6 = _step8.value;

											if (!(++total >= n)) {
												_context8.next = 11;
												break;
											}

											_context8.next = 11;
											return _e6;

										case 11:
											_iteratorNormalCompletion8 = true;
											_context8.next = 6;
											break;

										case 14:
											_context8.next = 20;
											break;

										case 16:
											_context8.prev = 16;
											_context8.t0 = _context8["catch"](4);
											_didIteratorError8 = true;
											_iteratorError8 = _context8.t0;

										case 20:
											_context8.prev = 20;
											_context8.prev = 21;

											if (!_iteratorNormalCompletion8 && _iterator8.return) {
												_iterator8.return();
											}

										case 23:
											_context8.prev = 23;

											if (!_didIteratorError8) {
												_context8.next = 26;
												break;
											}

											throw _iteratorError8;

										case 26:
											return _context8.finish(23);

										case 27:
											return _context8.finish(20);

										case 28:
										case "end":
											return _context8.stop();
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
		key: "toArray",
		value: function toArray() {
			var results = [];
			var _iteratorNormalCompletion9 = true;
			var _didIteratorError9 = false;
			var _iteratorError9 = undefined;

			try {
				for (var _iterator9 = this.source.apply()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
					var _e7 = _step9.value;

					results.push(_e7);
				}
			} catch (err) {
				_didIteratorError9 = true;
				_iteratorError9 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion9 && _iterator9.return) {
						_iterator9.return();
					}
				} finally {
					if (_didIteratorError9) {
						throw _iteratorError9;
					}
				}
			}

			return results;
		}
	}, {
		key: "enumerate",
		value: regeneratorRuntime.mark(function enumerate() {
			var _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, _e8;

			return regeneratorRuntime.wrap(function enumerate$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							_iteratorNormalCompletion10 = true;
							_didIteratorError10 = false;
							_iteratorError10 = undefined;
							_context9.prev = 3;
							_iterator10 = this.source.apply()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
								_context9.next = 12;
								break;
							}

							_e8 = _step10.value;
							_context9.next = 9;
							return _e8;

						case 9:
							_iteratorNormalCompletion10 = true;
							_context9.next = 5;
							break;

						case 12:
							_context9.next = 18;
							break;

						case 14:
							_context9.prev = 14;
							_context9.t0 = _context9["catch"](3);
							_didIteratorError10 = true;
							_iteratorError10 = _context9.t0;

						case 18:
							_context9.prev = 18;
							_context9.prev = 19;

							if (!_iteratorNormalCompletion10 && _iterator10.return) {
								_iterator10.return();
							}

						case 21:
							_context9.prev = 21;

							if (!_didIteratorError10) {
								_context9.next = 24;
								break;
							}

							throw _iteratorError10;

						case 24:
							return _context9.finish(21);

						case 25:
							return _context9.finish(18);

						case 26:
						case "end":
							return _context9.stop();
					}
				}
			}, enumerate, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		})
	}, {
		key: "first",
		value: function first() {
			var _iteratorNormalCompletion11 = true;
			var _didIteratorError11 = false;
			var _iteratorError11 = undefined;

			try {
				for (var _iterator11 = this.source.apply()[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
					var _e9 = _step11.value;

					return _e9;
				}
			} catch (err) {
				_didIteratorError11 = true;
				_iteratorError11 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion11 && _iterator11.return) {
						_iterator11.return();
					}
				} finally {
					if (_didIteratorError11) {
						throw _iteratorError11;
					}
				}
			}

			throw new Error("No items in list");
		}
	}, {
		key: "firstOrElse",
		value: function firstOrElse(d) {
			var _iteratorNormalCompletion12 = true;
			var _didIteratorError12 = false;
			var _iteratorError12 = undefined;

			try {
				for (var _iterator12 = this.source.apply()[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
					var _e10 = _step12.value;

					return _e10;
				}
			} catch (err) {
				_didIteratorError12 = true;
				_iteratorError12 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion12 && _iterator12.return) {
						_iterator12.return();
					}
				} finally {
					if (_didIteratorError12) {
						throw _iteratorError12;
					}
				}
			}

			return d;
		}
	}, {
		key: "foldl",
		value: function foldl(f, identity) {
			var _iteratorNormalCompletion13 = true;
			var _didIteratorError13 = false;
			var _iteratorError13 = undefined;

			try {
				for (var _iterator13 = this.source.apply()[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
					var _e11 = _step13.value;

					identity = f(identity, _e11);
				}
			} catch (err) {
				_didIteratorError13 = true;
				_iteratorError13 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion13 && _iterator13.return) {
						_iterator13.return();
					}
				} finally {
					if (_didIteratorError13) {
						throw _iteratorError13;
					}
				}
			}

			return identity;
		}
	}, {
		key: "any",
		value: function any(f) {
			var _iteratorNormalCompletion14 = true;
			var _didIteratorError14 = false;
			var _iteratorError14 = undefined;

			try {
				for (var _iterator14 = this.source.apply()[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
					var _e12 = _step14.value;

					if (f(_e12)) return true;
				}
			} catch (err) {
				_didIteratorError14 = true;
				_iteratorError14 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion14 && _iterator14.return) {
						_iterator14.return();
					}
				} finally {
					if (_didIteratorError14) {
						throw _iteratorError14;
					}
				}
			}

			return false;
		}
	}, {
		key: "all",
		value: function all(f) {
			var _iteratorNormalCompletion15 = true;
			var _didIteratorError15 = false;
			var _iteratorError15 = undefined;

			try {
				for (var _iterator15 = this.source.apply()[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
					var _e13 = _step15.value;

					if (!f(_e13)) return false;
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

			return true;
		}
	}, {
		key: "countWhere",
		value: function countWhere(f) {
			var total = 0;
			var _iteratorNormalCompletion16 = true;
			var _didIteratorError16 = false;
			var _iteratorError16 = undefined;

			try {
				for (var _iterator16 = this.source.apply()[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
					var _e14 = _step16.value;

					if (f(_e14)) {
						++total;
					}
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

			return total;
		}
	}, {
		key: "minimum",
		value: function minimum() {
			var minimum;
			var _iteratorNormalCompletion17 = true;
			var _didIteratorError17 = false;
			var _iteratorError17 = undefined;

			try {
				for (var _iterator17 = this.source.apply()[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
					var _e15 = _step17.value;

					if (!minimum) {
						minimum = _e15;
						continue;
					}

					if (_e15 < minimum) minimum = _e15;
				}
			} catch (err) {
				_didIteratorError17 = true;
				_iteratorError17 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion17 && _iterator17.return) {
						_iterator17.return();
					}
				} finally {
					if (_didIteratorError17) {
						throw _iteratorError17;
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
			var _iteratorNormalCompletion18 = true;
			var _didIteratorError18 = false;
			var _iteratorError18 = undefined;

			try {
				for (var _iterator18 = this.source.apply()[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
					var _e16 = _step18.value;

					if (!maximum) {
						maximum = _e16;
						continue;
					}

					if (_e16 > maximum) maximum = _e16;
				}
			} catch (err) {
				_didIteratorError18 = true;
				_iteratorError18 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion18 && _iterator18.return) {
						_iterator18.return();
					}
				} finally {
					if (_didIteratorError18) {
						throw _iteratorError18;
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
			var _iteratorNormalCompletion19 = true;
			var _didIteratorError19 = false;
			var _iteratorError19 = undefined;

			try {
				for (var _iterator19 = this.source.apply()[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
					var v = _step19.value;

					n += 1;
				}
			} catch (err) {
				_didIteratorError19 = true;
				_iteratorError19 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion19 && _iterator19.return) {
						_iterator19.return();
					}
				} finally {
					if (_didIteratorError19) {
						throw _iteratorError19;
					}
				}
			}

			return n;
		}
	}]);

	return LazySource;
})();