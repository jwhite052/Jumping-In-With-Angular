var app = angular.module('flapperNews', []);

app.factory('posts', [function(){
    var o = {
        posts: []
    }
    return o;
}])

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){

  // bind controller to posts array in service
  $scope.posts = posts.posts;

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