(function(){
  angular.module('app',[])
  .controller('myController',['$scope',MyController]);
  function MyController($scope){

    $scope.shoppingList = [
      {
        name:'Object1',
        quantity:1
      },
      {
        name:'Object2',
        quantity:2
      },
      {
        name:'Object3',
        quantity:3
      },
      {
        name:'Object4',
        quantity:4
      },
      {
        name:'Object5',
        quantity:5
      }
    ];
    $scope.boughtList=[];

    $scope.bought = function(index){
      $scope.boughtList.push($scope.shoppingList[index]);
      $scope.shoppingList.splice(index,1);
    }

  }
})();
