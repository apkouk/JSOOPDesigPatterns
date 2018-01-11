var projectRepo = function() {

  var db = {};

  var get = function(id) {
    console.log("Getting project " + id);
    return {
      id: "2344242",
      name: "Go to the target and smash it",
      manager: "Ernesto Valverde"
    }
  }

  var save = function(user) {
    console.log("Saving project " + project.name + "in db");
  }

  return {
    get: get,
    save: save
  }

}

module.exports = projectRepo()
