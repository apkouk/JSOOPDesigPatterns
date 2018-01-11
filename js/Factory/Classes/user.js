var Repo = require('./../Repos/userRepository');

var User = function(data) {
  this.id = data.id;
  this.name = data.name;
  this.age = data.age;
}
//With prototypes we avoid to create the functions everytime we make a new instance of the object

User.prototype.save = function(){
    console.log("Saving user: " + this.name);
    Repo.save(this);
}

module.exports = User;
