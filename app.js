(function(){
  angular.module('app',[])
  .controller('myController',['$scope',MyController]);
  function MyController($scope){
    $scope.foodList="";
    $scope.message = "";
    $scope.color="red";
    $scope.checkTheFood = function(){
      var list = $scope.foodList.split(',').filter(function(food){
        if(food.trim().length === 0)
        {
          return false;
        }
        else{
          return true;
        }
      });
      if(list.length === 0)
      {
        $scope.message = 'Please enter data first';
        $scope.color='red';

      }
      else if(list.length <=3){
        $scope.message = 'Enjoy!';
        $scope.color='green';
      }
      else if(list.length >= 4)
      {
        $scope.message = 'Too much!';
        $scope.color='green';
      }
    }


  }
})();
