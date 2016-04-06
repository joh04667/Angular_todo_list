var app = angular.module("myApp", []);

app.controller("MainController", function($scope) {

  $scope.tasks = [{text:'wash clothes', done:false},{text:'CSS for this page?', done:false}];

  $scope.add = function() {
    if(!$scope.todoInput) {return alert("enter something to do you bum");}
    $scope.tasks.push({text:$scope.todoInput, done:false});
    $scope.todoInput = null;
  };

  $scope.remove = function() {
    var currentList = $scope.tasks;
    $scope.tasks = [];
    currentList.forEach(function(s) {
      if (!s.done) {
       $scope.tasks.push(s);
     }
   });
  };

  // currentList.forEach(s => !s.done ? $scope.tasks.push(s));  <- why don't you work






}); // \Main Controller
