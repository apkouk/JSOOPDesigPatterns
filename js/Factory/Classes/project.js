var Repo = require('./../Repos/projectRepository');

var Project = function(data) {
  this.id = data.id;
  this.name = data.name;
  this.manager = data.manager;
}
//With prototypes we avoid to create the functions everytime we make a new instance of the object

Project.prototype.save = function(){
    console.log("Saving project: " + this.name);
    Repo.save(this);
}

module.exports = Project;
