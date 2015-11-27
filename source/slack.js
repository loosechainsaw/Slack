
export default class Slack {
	static from(source) {
		return new LazySource(new Stream(source));
	}

	static range(start, end) {
		return new LazySource(new Range(start, end));
	}
	
	static generator(initial, next){
		return new LazySource(new Generator(initial,next));
	}
}

class Generator{
	constructor(initial, next) {
		this.initial = initial;
		this.next = next;
	}

	* apply() {
		let element = this.initial;
		
		for(;;){
			yield element;
			element = this.next(element);
		}
	}
}

class Range {
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}

	* apply() {
		for (let i = this.from; i <= this.to; ++i) {
			yield i;
		}
	}
}

class Stream {
	constructor(source) {
		this.source = source;
	}

	* apply() {
		for (let element of this.source) {
			yield element;
		}
	}
}

class LazySource {

	constructor(source) {
		this.source = source;
	}

	map(f) {

		var s = this.source;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of s.apply()) {
						yield f(e);
					}
				}
			}
		});

		this.source = lazy;
		return lazy;

	}

	filter(f) {
		var s = this.source;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of s.apply()) {
						if (f(e)) {
							yield e;
						}
					}
				}
			}
		});

		this.source = lazy;
		return lazy;
	}
	
	concat(other) {
		var s = this.source;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of s.apply()) {
						yield e;
					}
					for (let e of other.apply()) {
						yield e;
					}
				}
			}
		});

		this.source = lazy;
		return lazy;
	}
	
	flatMapLazy(f) {
		var s = this.source;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of s.apply()) {
						for(let i of e.apply()){
							yield i;
						}
					}

				}
			}
		});

		this.source = lazy;
		return lazy;
	}
	
	flatMap(f) {
		var s = this.source;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of s.apply()) {
						for(let i of e){
							yield i;
						}
					}

				}
			}
		});

		this.source = lazy;
		return lazy;
	}

	foreach(f) {
		for (let e of this.source.apply()) {
			f(e);
		}
	}

	take(n) {

		var s = this.source;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					var total = 0;
					for (let e of s.apply()) {
						if (++total <= n) {
							yield e;
						}
					}
				}
			}
		});

		this.source = lazy;
		return lazy;
	}

	skip(n) {

		var s = this.source;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					var total = 0;
					for (let e of s.apply()) {
						if (++total > n) {
							yield e;
						}
					}
				}
			}
		});

		this.source = lazy;
		return lazy;

	}

	partition(n) {
		let self = this;
		let s = self.source;
		let result = {
			item1: Object.create(self, {
				apply: {
					value: function* () {
						let total = 0;
						for (let e of s.apply()) {
							if (++total <= n) {
								yield e;
							}
						}
					}
				}
			}),item2: Object.create(self, {
				apply: {
					value: function* () {
						let total = 0;
						for (let e of s.apply()) {
							if (++total >= n) {
								yield e;
							}
						}
					}
				}

			})
		};

		return result;

	}

	toArray() {
		var results = [];
		for (let e of this.source.apply()) {
			results.push(e);
		}
		return results;
	}

	* enumerate() {
		for (let e of this.source.apply()) {
			yield e;
		}
	}

	first() {
		for (let e of this.source.apply()) {
			return e;
		}
		throw new Error("No items in list");
	}

	firstOrElse(d) {
		for (let e of this.source.apply()) {
			return e;
		}
		return d;
	}

	foldl(f, identity) {
		for (let e of this.source.apply()) {
			identity = f(identity, e);
		}
		return identity;
	}

	any(f) {
		for (let e of this.source.apply()) {
			if (f(e))
				return true;
		}
		return false;
	}

	all(f) {
		for (let e of this.source.apply()) {
			if (!f(e))
				return false;
		}
		return true;
	}

	countWhere(f) {
		let total = 0;
		for (let e of this.source.apply()) {
			if (f(e)) {
				++total;
			}
		}
		return total;
	}

	minimum() {
		var minimum;
		for (let e of this.source.apply()) {
			if (!minimum) {
				minimum = e;
				continue;
			}

			if (e < minimum)
				minimum = e;

		}

		return {
			hasMinimum: function () {
				return !(!minimum);
			},
			value: function () {
				return minimum;
			}
		};
	}

	maximum() {
		var maximum;
		for (let e of this.source.apply()) {
			if (!maximum) {
				maximum = e;
				continue;
			}

			if (e > maximum)
				maximum = e;

		}

		return {
			hasMaximum: function () {
				return !(!maximum);
			},
			value: function () {
				return maximum;
			}
		};
	}

	size() {
		let n = 0;
		for (let v of this.source.apply()) {
			n += 1;
		}
		return n;
	}


}


 