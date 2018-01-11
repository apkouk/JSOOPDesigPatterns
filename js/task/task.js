//Creating objects
// var task = {}
// var task = Object.create(Object.prototype);
// var task = new Object();

// task.title = 'My task';
// task.description = 'My description';
// task.toString = function(){
//   return this.title + ' ' + this.description;
// }



//Defining properties
var task = {
  title: 'My Title',
  description: 'My Description'
};

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  //we cannot assign anything to this function
  writable: false,
  //when we call console.log(task) we won't show this function, it's not enumerable
  enumerable: false,
  //we cannot redifine a property if it is false
  configurable: false
});

//Make a new class inheriting from task
var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return this.title + ' This task is urgent'
  },
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(task.toString());
console.log(urgentTask.toString());
