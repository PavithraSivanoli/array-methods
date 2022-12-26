
//array methods
//push() insert
var xx=["p","q","r","s"];
var yy=["a","b"];
console.log(xx.push("t"));
console.log(xx);
//pop() delete
console.log(xx.pop());
console.log(xx);
//concat() combine
console.log(xx.concat(yy));
//join() join the elements
console.log(xx.join(" "));
console.log(xx.join(","));
//reverse()
console.log(xx.reverse());

var x=["p","q","r","s"];
var y=["a","b"];
var z=[1,2,3,4,5,6,7,8,9];
var s=[9,8,7,6];

//shift() array of the first element will be removed
console.log(x.shift());
console.log(x);
//unshift() new elements will be stored first position of array  returns length
console.log(x.unshift("w","z"));
console.log(x);
//slice() start and end (0,n-1)
console.log(x.slice(1,3));
//sort() ascending order
console.log(s.sort());
//splice(start,elements remove,add elements count)
console.log(x.splice(1,2,"n","m"));
console.log(x);
//fill
/*var n=["p","q","r","s"];
console.log(x.fill("uv"));
console.log(x);*/

//every all condition statisfies true will display
var age=[45,25,64,78];
var a=age.every(function(value)
{
	return value>=10
});
console.log(a);

//some any one condition statisfies true will display
var age=[45,25,64,78];
var a=age.some(function(value)
{
	return value>=50
});
console.log(a);

//filter() reduces the length checks the full array
var a = [23,45,78,13,29];
var x = a.filter(function(value)
{
	return value>=25   
});
console.log(x);
//find()  if the condition true in the first element it (returns value)
var a = [23,45,78,13,29,74];
var x = a.find(function(value)
{
	return value%2==0;   
});
console.log(x);

//find index satisfies the condition (return its index value)
var num = [11,17,12,3,4,5,6,7,8,9];
let e = num.findIndex(function(value)
{
	return value %2==0
});
console.log(e);

//findLast - (return the value) of last element that passes the test
var num = [11, 35,83,66,21];
let n = num.findLast(function(value)
{
	return value%2==0
});
console.log(n)

//findLastIndex - (return the index value) of last element that passes the test
var num = [11,17,22,13,54,15,66,27,39,9];
let so = num.findLastIndex(function(value)
{
	return value%2==0
});
console.log(so)

//includes - it return true if an array contain specified element else return false
var a = ["aee","bee","cee","dee","eee"]; //value,start
//var b = a.includes("cee")
var c = a.includes("bee",2)
//console.log(b);
console.log(c);

//map it changes the total array
var a=[1,2,3,4,5];w
var ny=a.map(function(value)
{
	return value*5
});
console.log(ny);

function len(a){
	for
	
	
}

a="venkat"

















