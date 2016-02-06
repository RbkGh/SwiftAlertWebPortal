/**
 * @ngdoc function
 * @name helloWorldAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloWorldAngularApp
 */
(function () {
    'use strict';
    angular.
    module('helloWorldAngularApp').
    controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [ 'SaveContactsToGroupService'];
    function MainCtrl(SaveContactsToGroupService) {
      var vm = this;
      vm.groupId ='456667';
      vm.tokenId ='7DF7E7A5-631F-4550-913D-CE3D8C024BC1';

      vm.requestData = {};
      vm.contactsListRaw =[];
                        //  {
                        //    "fullName":"Joel Boachie",
                        //    "phoneNumber":"267777830"
                        //  },{
                        //      "fullName":"Kwaku",
                        //      "phoneNumber":"267777830"
                        //    }
                        //];

      vm.requestData = {
              groupId : vm.groupId,
              tokenId : vm.tokenId,
              contactsList : vm.contactsListRaw
      }

      vm.saveContactsToGroup = saveContactsToGroup;

      function saveContactsToGroup() {
        console.log("FullRequest="+JSON.stringify(vm.requestData));
        SaveContactsToGroupService.postContactsToGroup(vm.requestData).then(
            function successCallBack(response){
              //response with data is already injected in successCallback,hence no need to call response.data to aceess it

              // {
              //   "status": "00"
              //   "message": "Success"
              //   "responseObject": {
              //       "numberOfContactsSaved": 6
              //     }-
              // }
              var responseJSON ={
                status : response.status,
                message : response.message,
                responseObject : {
                  numberOfContactsSaved : response.responseObject.numberOfContactsSaved
                }
              }
              alert('response from service'+JSON.stringify(responseJSON));
            },
            function errorCallBack(response){
              alert('Could not send Contacts to Service\n.Please Try Again Later');
              console.log(response);
            }
          );
      }

    }
})();


//sample request
//         {
//   "groupId":"456667",
//   "tokenId":"7DF7E7A5-631F-4550-913D-CE3D8C024BC1",
//   "contactsList":[
//             {
//               "fullName":"Rodney3",
//               "phoneNumber":"0034566"
//             },
//             {
//               "fullName":"Rodney322",
//               "phoneNumber":"0034566"
//             }
//           ]
// }
