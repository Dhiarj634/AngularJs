(function(){
  angular.module('app',[])
  .controller('narrowItDowncontroller',['$scope','$q','menuSearchService',NarrowItDowncontroller])
  .service('menuSearchService',['$http','$q',MenuSearchService])
  .directive('foundItems',FoundItems);

  //Controller
  function NarrowItDowncontroller($scope,$q,menuSearchService){
    $scope.searchString="";
    $scope.showNotification=false;
    $scope.Items=[];
    $scope.getTheMenu = function(){
      $scope.showNotification=false;
      if($scope.searchString.length == 0)
      {
        $scope.items=[];
        $scope.foundItems=[];
        $scope.showNotification=true;
        return;
      }
      var promise = (menuSearchService.getMatchedMenuItems($scope.searchString));
      promise.then(function(response){
        $scope.Items = response.data.menu_items;
        $scope.foundItems = $scope.Items.filter(item => { return item.description.indexOf($scope.searchString) >= 0;});
        if($scope.foundItems == 0)
        {
          $scope.showNotification=true;
          return;
        }
      });

    }
    $scope.remove =function(shortName)
    {
      $scope.foundItems = $scope.foundItems.filter(item => {return item.short_name!== shortName;});
    }
  }


  //Directive
  function FoundItems(){
    var ddo = {
        templateUrl:'loader/loader.template.html',
        scope : {
          items : '=items',
          onRemove: '&onRemove'
        },
        controller:ItemsControllerFunction,
        bindToController:true,
        controllerAs:'itemCtrl',
    }

    return ddo;
  }

  function ItemsControllerFunction()
  {
    var myCtrl = this;

  }





  //Service
function MenuSearchService($http,$q){

  var service = {
    getMatchedMenuItems: function(foundValues,searchItem){
      var link = 'https://davids-restaurant.herokuapp.com/menu_items.json';
      var items = $http.get(link);
      return items;
    }
  };

  return service;
}


})();
