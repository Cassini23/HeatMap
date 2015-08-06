(function(){
   angular.module('ticketApp')
       .factory('ticketReadFactory', function($http){
           var service = {};
           service.readData = function(){
               return $http.get('data/data.json');
           };
           return service;
       });
       /*.factory('ticketDataFactory', function(){
           var service = {};
           service.setData = function(){
               var areas =['Sunnyvale','Santa Clara','Helsinki','Toronto'];
               var Tstatus = ['Open','Closed'];
               var name= ['A','B','C','D','E'];
               var result = [];
               for(var i =0; i<100; i++){
                   //sample set of 100 tickets
                   result.push({
                       "ticketID": 358475,
                       "complaints/text": "Some Text",
                       "madeByUser": name[i% Math.round(Math.random() * (name.length - 1))],
                       "userLocation": areas[i% Math.round(Math.random() * (areas.length - 1))],
                       "Date": new Date(Date.now * Math.round(Math.random() * (1 - 0.95))) ,
                       "Status": Tstatus[i% Math.round(Math.random() * (Tstatus.length - 1))]
                   });
               }
               console.log(result);
           };
           return service;
       });*/
}());