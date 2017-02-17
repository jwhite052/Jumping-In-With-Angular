var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';

  $scope.posts = [
      {title: 'post 1', upvotes: 3},
      {title: 'post 2', upvotes: 4},
      {title: 'post 3', upvotes: 66666},
      {title: 'post 4', upvotes: 7},
      {title: 'post 5', upvotes: 5}
  ];

  $scope.addPost = function() {
    // return if title is blank
    if(!$scope.title || $scope.title === '') { return; }

    // add title to posts list
    $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
    });
  };

  $scope.title = '';
  $scope.link = '';

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  }

}]);