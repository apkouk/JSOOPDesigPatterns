var repo = function() {
  var called = 0;

  var save = function(task) {
    called++;
    console.log('Saving ' + task + ' Called ' + called + ' times');
  }

  console.log('newing up task repo');
  return {
    save: save
  }

}

// with that () we are effectively creating the singleton
// everytime we call this repo will execute the return statemen, the
// rest will be the same
module.exports = repo();
