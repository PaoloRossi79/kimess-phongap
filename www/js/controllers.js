angular.module('starter.controllers', [])

.controller('ChatCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
  var value = window.localStorage.getItem("key");
  $scope.test = value;
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
  window.localStorage.setItem("test", "paolo")
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
