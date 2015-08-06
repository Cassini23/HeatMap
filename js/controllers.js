(function(){
   angular.module('ticketApp')
       .controller('ticketAppController', function($scope, ticketReadFactory){
           $scope.categories =[{name:'Location'},{name:'Status'},{name:'User'}];
           $scope.result=[];
           /*Click function called upon ng-click*/
            $scope.getData = function(category){
               //$scope.$apply
                $scope.result=[];
                ticketReadFactory.processData(category);
                $scope.result = ticketReadFactory.result;
            }
       });
}());