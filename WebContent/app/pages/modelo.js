   app.controller('TaskController', ['$http','$scope','$rootScope','$state', function($http, $scope, $rootScope, $state) {
       var store = this;
       
       store.tasks = ["Item One",
                      "Item dois",
                      "Item 3"
                      ];

//       $http.get('/tasks').success(function(data) {
//           store.tasks = data;
//       });
       
//       $scope.inicio = function() {
//    	   $state.go("inicio");
//       }; 
      
   }]);