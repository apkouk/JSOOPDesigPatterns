
var Task = function(name) {
  this.name = name;
  this.completed = false;
}

// PROTOTYPE
// An encapsulation of properties that an object links to
// With prototypes we avoid to create the functions everytime we
//make a new instance of the object

Task.prototype.complete = function(){
    console.log("Task completed: " + this.name);
    this.completed = true;
}
Task.prototype.save = function(){
    console.log("Saving task: " + this.name);
}

module.exports = Task;
