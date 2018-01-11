// CONSTRUCTOR PATTERN
// Use to create new objects with their own object scope


var Task = require('./task');

var task1 = new  Task("demo for constructor pattern");
var task2 = new  Task("demo for modules");
var task3 = new  Task("demo for singletons");
var task4 = new  Task("demo for prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();
