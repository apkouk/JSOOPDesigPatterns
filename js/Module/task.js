var Repo = require('./taskRepository');


var Task = function(data) {
  this.name = data.name;
  this.completed = false;
}
//With prototypes we avoid to create the functions everytime we make a new instance of the object
Task.prototype.complete = function(){
    console.log("Task completed: " + this.name);
    this.completed = true;
}
Task.prototype.save = function(){
    console.log("Saving task: " + this.name);
    Repo.save(this); 
}

module.exports = Task;
