/**
 * Created by hxsd on 2016/9/30.
 */
myapp.controller("xiangCtrl",function($scope, $state, $stateParams,dataFactory){
    var id = $stateParams.id;
    // 查询出来要显示在view中的商品数据
    var data = dataFactory.query();
    angular.forEach(data.productList, function (item) {
        if (item.id == id) {
            $scope.product = item;
            return false;   // 中断forEach循环 <=> break
        }
    });
    $scope.like=function(product){
        if(product.like==true){
            product.collection--;
            product.like=false;
            return;
        }
        if(product.like==false){
            product.collection++;
            product.like=true;
            return;
        }
    }
});