var Slack = require('../lib/slack.babel.js').default.default;
var data = (Slack.range(1,1000000)
				 .map(function(x){ return x * 2;})
				 .take(10));

console.time("duration");
data.toArray().forEach(function(element){
	console.log(element);
});
console.timeEnd("duration");

console.time("duration");
var max = data.maximum().value();
console.log(max);
console.timeEnd("duration");

console.time("duration");
var max = data.take(5).foldl(function(a, b) { 
	return a + b;
},0);
console.log(max);
console.timeEnd("duration");

console.time("duration");
var size = data.take(5).size();
console.log(size);
console.timeEnd("duration");

console.time("duration");
var fst = data.take(5).first();
console.log(fst);
console.timeEnd("duration");

console.time("duration");
var part = data.take(8).partition(2);
part.item1.foreach(x => console.log);
console.timeEnd("duration");

console.time("duration");
var a = Slack.from([1,2,3]);
var b = Slack.from([4,5,6]);
a.concat(b).foreach(x => console.log(x));
console.timeEnd("duration");
