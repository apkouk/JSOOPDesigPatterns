'use-strict'
class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  };

  complete() {
    console.log("Task completed: " + this.name);
    this.completed = true;
  };

  save() {
    console.log("Saving task: " + this.name);
  };
}


var task1 = new  Task("demo for constructor pattern");
var task2 = new  Task("demo for modules");
var task3 = new  Task("demo for singletons");
var task4 = new  Task("demo for prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();
