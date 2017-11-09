angular.module('app', ['components'])

.controller('navItems', function($scope, $locale) {
  $scope.navItem = [
   {
    "url": "testurl",
    "icon": "play",
    "text": "topic 1",
    "badge": "",
  },
    {
    "url": "testurl2",
    "icon": "cog",
    "text": "topic 2",
	"badge": "new",
  }     
                  
    ];
 

});