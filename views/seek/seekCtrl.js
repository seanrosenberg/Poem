/**
 * Created by Administrator on 2016/10/1.
 */
myapp.controller("seekCtrl",function($scope,dataFactory,$state,$ionicViewSwitcher,$http){
    $scope.refresh=function(){
//      $http.get("data/data.json").success(function(data){
//          $scope.data=dataFactory.query();
//      }).finally(function(){
//          $scope.$broadcast("scroll.refreshComplete");
//      })
$scope.data=dataFactory.query();
    };
    $scope.data=dataFactory.query();
    $scope.authorInfo="";
    $scope.noiflike=function(product){
        product.iflike=false;
    };
    $scope.bg = [];
    $scope.isddActive = function(index,authorInfo){
        if($scope.bg[index]=='ddActive'){
            $scope.bg[index] = '';
            $scope.authorInfo="";
        }else{
            $scope.bg = [];
            $scope.bg[index] = 'ddActive';
            $scope.authorInfo=authorInfo;
        }

    };

    //这边只能用定时器解决异步问题。
    function unique(arr){
        var tempArr = arr;
        for(var i = 0;i < tempArr.length;i++){
            for(var j = 0;j< tempArr.length;j++){
                if(tempArr[i] == tempArr[j] && i!=j){
                    arr.splice(j,1);
                }
            }
        }
        return arr;
    }
    setTimeout(function(){
        $scope.newauthor=[];
        for(var i=0; i< $scope.data.productList.length;i++){
            $scope.newauthor.push($scope.data.productList[i].authorInfo);
        }
        unique($scope.newauthor)
    },1)
});
myapp.filter("testFilter",function(){
    return function(list,authorInfo){
        var result=[];
        if(authorInfo!=""){
            for(var i=0;i<list.length;i++){
                if(list[i].authorInfo==authorInfo){
                    result.push(list[i]);
                }
            }
            return result;
        }else{
            return list;
        }

    }
});




