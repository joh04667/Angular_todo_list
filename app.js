var app = angular.module("myApp", []);

app.controller("MainController", function($scope) {

  // initial array population
  $scope.tasks = [{text:'wash clothe', done:false},{text:'CSS for this page?', done:false}];


// adds task from input to ng-repeated list
  $scope.add = function() {
    if(!$scope.todoInput) {return alert("enter something to do you bum");}
    $scope.tasks.push({text:$scope.todoInput, done:false});
    $scope.todoInput = null;
  };

// repopulates tasks array with only tasks that have .done as true
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
