/**
 * Created by Administrator on 2016/10/1.
 */
myapp.controller("selectCtrl",function($scope,dataFactory,$state,$ionicViewSwitcher,$http){
    $scope.refresh=function(){
//      $http.get("data/data.json").success(function(data){
//
//      }).finally(function(){
//          $scope.$broadcast("scroll.refreshComplete");
//      })
$scope.data=dataFactory.query();
    };
    $scope.data=dataFactory.query();

});