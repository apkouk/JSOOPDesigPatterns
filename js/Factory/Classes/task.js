var Repo = require('./../Repos/taskRepository');


var Task = function(data) {
  this.name = data.name;
  this.user = data.user;
  this.project = data.project;
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
Task.prototype.getUser = function(){
    console.log("Getting user " + this.user + " from task " + this.name);
    return this.user;
}
Task.prototype.getProject = function(){
    console.log("Getting projec " + this.project + " from task " + this.name);
    return this.project;
}

module.exports = Task;
