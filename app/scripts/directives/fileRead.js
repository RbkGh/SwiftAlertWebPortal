/**
 * Created by Rodney on 04-Feb-16.
 */
//didn't make this an anonymous function.
(
  function(){
    'use strict';
angular
  .module('helloWorldAngularApp').
directive("fileRead", fileRead);


    function fileRead() {
  return {
    scope: {
      opts: '='
    },
    link: function ($scope, $elm, $attrs) {
      $elm.on('change', function (changeEvent) {
        var reader = new FileReader();
        console.log($attrs);
        console.log("We are here");
        reader.onload =function (evt) {
          $scope.$apply(function () {
            var data = evt.target.result;

            var workbook = XLSX.read(data, {type: 'binary'});

            var headerNames = XLSX.utils.sheet_to_json(
              workbook.Sheets[workbook.SheetNames[0]],
              { header: 1 }
            )[0];


            var data = XLSX.utils.sheet_to_json( workbook.Sheets[workbook.SheetNames[0]]);
            //$scope.contactList = [];
            //$scope.contactList = JSON.stringify(data);
            console.info("JSON Data =\n\n"+JSON.stringify(data));
            //$scope.opts.columnDefs = [];
            var arrayOfContacts = JSON.stringify(data);
            var index;
            for	(index = 0; index < arrayOfContacts.length; index++) {
              $scope.contactsListRaw.push(arrayOfContacts[index]);
            }
            headerNames.forEach(function (h) {
              //$scope.opts.columnDefs.push({ field: h });
              console.log("h="+h);
            });

            //$scope.opts.data = data;

            //$elm.val(null);
          });
        };

        reader.readAsBinaryString(changeEvent.target.files[0]);
      });
    }
  }
}})();
