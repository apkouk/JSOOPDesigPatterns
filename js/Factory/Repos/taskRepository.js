var taskRepo = function() {

  var db = {};

  var get = function(id) {
    console.log("Getting task " + id);
    return {
      name: "Make a goal"
    }
  }

  var save = function(task) {
    console.log("Saving task " + task.name + " in db");
  }

  return {
    get: get,
    save: save
  }

}

module.exports = taskRepo()
