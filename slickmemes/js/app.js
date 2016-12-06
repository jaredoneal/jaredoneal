angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: '/photos/KohChang.jpg',
      text: 'Koh Chang, Thailand'
    },
    {
      image: '/photos/Scotland.jpg',
      text: 'Isle of Skye, Scotland'
    },
    {
      image: '/photos/Charlotte3.jpg',
      text: 'Uptown Charlotte, NC'
    },
    {
      image: '/photos/PonteVecchio.jpg',
      text: 'Florence, Italy'
    }
    ,
    {
      image: '/photos/Miami.jpg',
      text: 'Miami Beach, FL'
    }
    ,
    {
      image: '/photos/Manhattan.jpg',
      text: 'New York City'
    }
    ,
    {
      image: '/photos/Tampa2.jpg',
      text: 'Tampa, FL'
    }
  ];
}