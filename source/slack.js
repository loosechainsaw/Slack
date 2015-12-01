
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
	
	* apply(){
		for (let e of this.source.apply()) {
			yield e;
		}
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
						for(let i of e.source.apply()){
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
						for(let i of e){
							yield i;
						}
					}

				}
			}
		});

		return lazy;
	}
	
	distinct(f){
		var s = this;
		var added = new Map();
		var lazy = Object.create(this, {
			apply: {
				value: function* () {
					for (let e of s.apply()) {
						var selector = f(e);
						if(!added.get(selector)){
							added.set(selector,selector);
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

	foreach(f) {
		for (let e of this.apply()) {
			f(e);
		}
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
			}),item2: Object.create(self, {
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
	
	toMap(k,d){
		var map = new Map();
		for (let e of this.apply()) {
			map.set(k(e),d(e));
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
		
		if(element)
			return element;
			
		throw new Error("No items in list");
	}
	
	lastOrElse(d) {
		let element;
		for (let e of this.apply()) {
			element = e;
		}
		
		if(element)
			return element;
			
		return d;
	}

	foldl(f, identity) {
		for (let e of this.apply()) {
			identity = f(identity, e);
		}
		return identity;
	}
	
	sum(){
		return this.foldl((x,y)=>x + y, 0);
	}
	
	product(){
		return this.foldl((x,y)=>x * y, 1);
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


 