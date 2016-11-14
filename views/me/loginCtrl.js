/**
 * Created by Administrator on 2016/10/1.
 */
myapp.controller("loginCtrl",function($scope,dataFactory,$state,$ionicViewSwitcher){
    $scope.login=function(name){
        $state.go("me",{name:name,show:false,touxiang:'./images/touxiang.png'});
    }
});