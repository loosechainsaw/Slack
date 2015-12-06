
export default class Slack {
	static from(source) {
		return new LazySource(new Stream(source));
	}

	static range(start, end) {
		return new LazySource(new Range(start, end));
	}

	static generate(initial, advance, next) {
		return new LazySource(new Generator(initial, advance, next));
	}

	static throw(error) {
		return new LazySource(new Throw(error));
	}

	static return(value) {
		return this.from([value]);
	}

	static repeat(value) {
		return new LazySource(new Repeat(value));
	}
}

class Generator {
	constructor(initial, advance, next) {
		this.initial = initial;
		this.advance = advance;
		this.next = next;
	}

	* apply() {
		let element = this.initial;
		yield element;

		while (this.advance(element)) {

			element = this.next(element);
			yield element;
		}

	}
	
	[Symbol.iterator](){
		return this.apply();
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
	
	[Symbol.iterator](){
		return this.apply();
	}
}

class Throw {
	constructor(error) {
		this.error = error;
	}

	* apply() {
		throw this.error;
	}
	
	[Symbol.iterator](){
		return this.apply();
	}
	
}

class Repeat {
	constructor(value) {
		this.value = value;
	}

	* apply() {
		for (; ;) {
			yield this.value;
		}
	}
	
	[Symbol.iterator](){
		return this.apply();
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
	
	[Symbol.iterator](){
		return this.apply();
	}
}

class LazySource {

	constructor(source) {
		this.source = source;
	}

	* apply() {
		for (let e of this.source.apply()) {
			yield e;
		}
	}
	
	[Symbol.iterator](){
		return this.apply();
	}

	map(f) {

		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of self.apply()) {
						yield f(e);
					}
				}
			}
		});

		return lazy;
	}

	filter(f) {
		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of self.apply()) {
						if (f(e)) {
							yield e;
						}
					}
				}
			}
		});

		return lazy;
	}

	concat(other) {
		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of self.apply()) {
						yield e;
					}
					for (let e of other) {
						yield e;
					}
				}
			}
		});

		return lazy;
	}

	concatLazy(other) {
		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of self.apply()) {
						yield e;
					}
					for (let e of other.apply()) {
						yield e;
					}
				}
			}
		});

		return lazy;
	}

	flatMapLazy(f) {
		var s = this.source;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of s.apply()) {
						for (let i of e.source.apply()) {
							yield i;
						}
					}

				}
			}
		});

		return lazy;
	}

	flatMap(f) {
		var s = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of s.apply()) {
						for (let i of e) {
							yield i;
						}
					}

				}
			}
		});

		return lazy;
	}

	distinct(f) {
		var s = this;
		var added = new Map();
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of s.apply()) {
						var selector = f(e);
						if (!added.get(selector)) {
							added.set(selector, selector);
						}
					}
					for (let e of added.values()) {
						yield e;
					}
				}
			}
		});

		return lazy;
	}

	distinctUntilChanged(f) {
		let self = this;
		let last = undefined;
		let lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of self.apply()) {
						var selector = f(e);
						if (last != selector) {
							last = selector;
							yield last;
						}
					}
				}
			}
		});

		return lazy;
	}

	foreach(f) {
		for (let e of this.apply()) {
			f(e);
		}
	}
	
	union(other){
		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					var added = new Map();
					for (let e of self.apply()) {

						if (!added.get(e)) {
							added.set(e, e);
						}
					}
					for (let e of other) {
						if (!added.get(e)) {
							added.set(e, e);
						}
					}
					for (let e of added.values()) {
						yield e;
					}
				}
			}
		});

		return lazy;
	}
	
	unionLazy(other){
		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					var added = new Map();
					for (let e of self.apply()) {

						if (!added.get(e)) {
							added.set(e, e);
						}
					}
					for (let e of other.apply()) {
						if (!added.get(e)) {
							added.set(e, e);
						}
					}
					for (let e of added.values()) {
						yield e;
					}
				}
			}
		});

		return lazy;
	}

	take(n) {

		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					var total = 0;
					for (let e of self.apply()) {
						if (++total <= n) {
							yield e;
						}
					}
				}
			}
		});

		return lazy;
	}
	
	takeWhile(f) {

		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of self.apply()) {
						if(f(e))
							yield e;
						else
							return;
					}
				}
			}
		});

		return lazy;

	}

	skip(n) {

		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					var total = 0;
					for (let e of self.apply()) {
						if (++total > n) {
							yield e;
						}
					}
				}
			}
		});

		return lazy;

	}
	
	skipWhile(f) {

		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					let ignore = true;
					for (let e of self.apply()) {
						
						if(ignore)
							ignore = f(e);
						
						if(!ignore)
							yield e;
					}
				}
			}
		});

		return lazy;

	}

	partition(n) {
		let self = this;
		let result = {
			item1: Object.create(self, {
				apply: {
					value: function* () {
						let total = 0;
						for (let e of self.apply()) {
							if (++total <= n) {
								yield e;
							}
						}
					}
				}
			}), item2: Object.create(self, {
				apply: {
					value: function* () {
						let total = 0;
						for (let e of self.apply()) {
							if (++total > n) {
								yield e;
							}
						}
					}
				}

			})
		};

		return result;

	}

	toMap(k, d) {
		var map = new Map();
		for (let e of this.apply()) {
			map.set(k(e), d(e));
		}
		return map;
	}

	toArray() {
		var results = [];
		for (let e of this.apply()) {
			results.push(e);
		}
		return results;
	}

	* enumerate() {
		for (let e of this.apply()) {
			yield e;
		}
	}

	first() {
		for (let e of this.apply()) {
			return e;
		}
		throw new Error("No items in list");
	}

	firstOrElse(d) {
		for (let e of this.apply()) {
			return e;
		}
		return d;
	}

	last() {
		let element;
		for (let e of this.apply()) {
			element = e;
		}

		if (element)
			return element;

		throw new Error("No items in list");
	}

	lastOrElse(d) {
		let element;
		for (let e of this.apply()) {
			element = e;
		}

		if (element)
			return element;

		return d;
	}

	foldl(f, identity) {
		for (let e of this.apply()) {
			identity = f(identity, e);
		}
		return identity;
	}

	scan(f, identity) {

		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					let accum = identity;
					for (let e of self.apply()) {
						accum = f(accum, e);
						yield accum;
					}
				}
			}
		});

		return lazy;
	}

	groupBy(f) {
		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					var map = new Map();
					for (let e of self.apply()) {
						let k = f(e);

						if (!map.has(k)) {
							map.set(k, [e]);
						} else {
							var v = map.get(k);
							v.push(e);
						}
					}

					for (let [key,elements] of map.entries()) {
						yield { key, elements };
					}
				}
			}
		});

		return lazy;
	}

	onErrorResumeNext() {
		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					var generator = self.apply();

					while (true) {
						try {
							var obj = generator.next();

							if (obj.done)
								return;

							yield obj.value;

						} catch (error) {

						}
					}
				}
			}
		});

		return lazy;
	}

	catch(other) {
		var self = this;
		var lazy = Object.create(this, {
			apply: {
				value: function* () {

					var generator = self.apply();

					while (true) {
						try {
							var obj = generator.next();

							if (obj.done)
								return;

							yield obj.value;

						} catch (error) {
							for (let z of other.apply()) {
								yield z; self.apply()
							}
						}
					}

				}
			}
		});

		return lazy;
	}

	sum() {
		return this.foldl((x, y) => x + y, 0);
	}

	product() {
		return this.foldl((x, y) => x * y, 1);
	}
	
	avg(){
		let total = 0;
		let count = 0;
		for (let e of this.apply()) {
			total += e;
			count += 1;
		}
		return total / count;
	}

	any(f) {
		for (let e of this.apply()) {
			if (f(e))
				return true;
		}
		return false;
	}

	all(f) {
		for (let e of this.apply()) {
			if (!f(e))
				return false;
		}
		return true;
	}

	countWhere(f) {
		let total = 0;
		for (let e of this.apply()) {
			if (f(e)) {
				++total;
			}
		}
		return total;
	}

	minimum() {
		var minimum;
		for (let e of this.apply()) {
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
		for (let e of this.apply()) {
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
		for (let v of this.apply()) {
			n += 1;
		}
		return n;
	}


}


 