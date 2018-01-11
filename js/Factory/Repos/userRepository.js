var userRepo = function() {

  var db = {};

  var get = function(id) {
    console.log("Getting user " + id);
    return {
      id: "1",
      name: "Lionel Messi",
      age: 30
    }
  }

  var save = function(user) {
    console.log("Saving user " + user + "in db");
  }

  return {
    get: get,
    save: save
  }

}

module.exports = userRepo()
