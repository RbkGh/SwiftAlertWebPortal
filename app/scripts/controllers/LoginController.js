/**
 * Created by Rodney on 01-Feb-16.
 */

(function (){
  angular
    .module('helloWorldAngularApp')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location','AuthService','FlashService'];

  function LoginController($location,AuthService,FlashService){
    var vm = this;
    vm.login = login;

    function login(){

      vm.dataLoading = true;
      AuthService.Login(vm.userName,vm.password).then(
        function successCallBack(response){
          NProgress.done();
          console.log("The response ="+JSON.stringify(response));
          if (response.status === '00') {
            $location.path('/main');
            var userObj = {
              status: response.status,
              messsage: response.message,
              responseObject: {
                userName: response.responseObject.userName,
                toKen: response.responseObject.toKen,
                lastLoginTime: response.responseObject.lastLoginTime,
                deviceId: response.responseObject.deviceId
              }
            };
            console.log(userObj);
            //alert('Welcome,' + userObj.responseObject.userName + '\n Token=' + userObj.responseObject.toKen);
          }
          else {
            vm.dataLoading = false;
            var msg = response.message;
            alert('' + msg + '\nPlease Retry');
          }

        },
        function errorCallBack(response){

          alert('Could not login.\nPlease Try Again Later');
          console.log(response);
        }
      );
    }
  }
})();
