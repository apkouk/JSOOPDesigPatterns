// FACTORY PATTERN
// A pattern used to simplify object creation

var Task = require('./Classes/task');
var User = require('./Classes/user');
var Project = require('./Classes/project');
var Repos = require('./reposFactory');

var task = new Task(Repos.task.get(1));
var user = new User(Repos.user.get(1));
var project = new Project(Repos.project.get(1));

task.user = user;
console.log(task.user);

task.project = project;
console.log(task.project);

task.save();
