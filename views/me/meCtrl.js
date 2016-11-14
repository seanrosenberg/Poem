/**
 * Created by Administrator on 2016/10/1.
 */
myapp.controller("meCtrl",function($scope,dataFactory,$state,$ionicViewSwitcher,$stateParams){
    var name=$stateParams.name;
    $scope.show=$stateParams.show;
    $scope.touxiang=$stateParams.touxiang;
    $scope.name=name||"请您先登录";
    $scope.data=dataFactory.query();
    $scope.nolike=function(product){
        product.like=false;
    };
    $scope.noshow=function(product){
        product.show=false;
    };
    $scope.iLikeShow=true;
    $scope.iLike=function(){
        $scope.iLikeShow=true;
        $scope.iRead=false;
    };
    $scope.iReadShow=function(){
        $scope.iLikeShow=false;
        $scope.iRead=true;
    };
});