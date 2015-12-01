#Slack JS

[![Build Status](https://travis-ci.org/loosechainsaw/Slack.svg)](https://travis-ci.org/loosechainsaw/Slack)

##Purpose
Provide javascript developers with a great functional set of extensions for manipulating, querying and projecting data. Heavily inspired by LINQ.

##Design
Built with ES6 generators to provide lazy evaluation, and some of the newer nicer features such as classes. Essentially we wrap your array or underlying datastructure to proxy your datastructure and provide a set of methods for manipulating your data and since we wrap we dont kill any of the built in methods or methods your add to Array et al prototype.

##Usage
Everything works on a LazySource object. This is private to the module however we can use the static methods on Slack to get one.

```javascript
var array = [1,2,3,4,5,6,7,8,9,10];
var source = Slack.from(array);
```
Now that we have a source object we can manipulate the underlying array lazily with the large set of provided methods on LazySource.

```javascript
var data = source.filter(x => x > 5).map(x => x * 10).take(2).enumerate();
for(let element of data){
  console.log(element);
}
```
In the example about we filter out all elements less tan 5 and then multiply them by 10 and take the first 2;
you must call enumerate at the end if you wish to write a for of loop and extract each element and manipulate it.

##Functions

|**Method**                       |**Description**                                                                            |
|---------------------------------|-------------------------------------------------------------------------------------------|
|                                 |                                                                                           |
|                                 |                                                                                           |





