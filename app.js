(function(){
  angular.module('app',[])
  .controller('myController',['$scope',MyController]);
  function MyController($scope){

    $scope.shoppingList = [
      {
        name:'Apple',
        quantity:1
      },
      {
        name:'Orange',
        quantity:2
      },
      {
        name:'Guava',
        quantity:3
      },
      {
        name:'Cookie',
        quantity:4
      },
      {
        name:'Bread',
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
