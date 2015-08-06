/*Services defined here*/

(function(){
   angular.module('ticketApp')
       .factory('ticketReadFactory', function($http){

           var service = {};
           service.result = [];
           /*read the .json fine and return a promise*/
           service.readData = function(){
               return $http.get('data/data.json');
           };

           /*process data using the category specified*/

           service.processData = function(category){
               /*A promise*/
               this.readData().then(function(data){
                   service.result = process(category.name,data); //returns the object
               }, function(error){
                  return error;
               });
           };
           return service;
       });

    function process(category, data){
        var frequency ={};
        Array.prototype.slice.call(data.data).forEach(function(item){
            if(frequency[item[category]]){
                frequency[item[category]]++;
            }
            else {
                frequency[item[category]] = 1;
            }
        });
        return frequency;
    }


       /*.factory('processFactory',function(){
           var service ={};
           service.frequency = {};
           service.process = function(category, data){
               Array.prototype.slice.call(data).forEach(function(item){
                   console.log('here');
                   console.log(category, item[category]);
                   if(service.frequency[item[category]]){
                            service.frequency[item[category]]++
                   }
                   else service.frequency[category] = 1;

                });
              // return frequency;
           };
           return service;
       });*/
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