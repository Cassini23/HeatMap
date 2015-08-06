(function(){
   angular.module('ticketApp')
       .controller('ticketAppController', function($scope, ticketReadFactory){
           $scope.areas =[{name:'Sunnyvale'},{name:'Santa Clara'},{name:'Helsinki'},{name:'Toronto'}];
           ticketReadFactory.readData().then(function(data){
               console.log(data);
           }, function(error){
               console.log('could not read');
           });
       });
}());