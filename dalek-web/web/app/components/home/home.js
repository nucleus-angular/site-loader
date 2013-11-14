angular.module('app.home.home', [
  'app.core'
])
.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('app.home.home', {
      url: '',
      views: {
        '': {
          templateUrl: '/app/components/home/assets/templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    });
  }
])
.controller('HomeCtrl', ['$scope', 'nagSiteLoader', 'nagBeat', function($scope, nagSiteLoader, nagBeat) {
  $scope.enableSiteLoader = function() {
    nagSiteLoader.enableBlocking();

    nagBeat.add('siteLoader/remove', function(){
      nagSiteLoader.disableBlocking();
    }, 3000, {
      once: true
    });
  };
  $scope.enableSiteLoaderCustom = function() {
    nagSiteLoader.enableBlocking('<div class="text" data-ut="text-custom">This is a custom message</div>');

    nagBeat.add('siteLoader/remove', function(){
      nagSiteLoader.disableBlocking();
    }, 3000, {
      once: true
    });
  };
  $scope.enableNonBlockingLoader = function() {
    nagSiteLoader.enableNonBlocking();
  };
  $scope.disableNonBlockingLoader = function() {
    nagSiteLoader.disableNonBlocking();
  };
}]);
