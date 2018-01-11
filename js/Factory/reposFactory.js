var reposFactory = function() {
  var repos = this;
  var reposList = [{
      name: 'task',
      source: './Repos/taskRepository'
    },
    {
      name: 'user',
      source: './Repos/userRepository'
    },
    {
      name: 'project',
      source: './Repos/projectRepository'
    },
  ];

  reposList.forEach(function(repo){
    repos[repo.name] = require(repo.source)
  });

};

module.exports = new reposFactory;
