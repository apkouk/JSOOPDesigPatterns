
//1
var obj1 = {}
obj1.param = "value Obj1";
console.log(obj1.param);

var obj2 = {}
obj2['param'] = "value obj2";
console.log(obj2['param']);

var obj3 = {}
var value = 'value';
obj3[value] = 'new value Obj3';
console.log(obj3[value]);

//2
var nextObj = Object.create(Object.prototype);

//3
var lastObj = new Object();
