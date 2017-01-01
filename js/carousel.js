angular.module('carousel', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: '/photos/KohChang.JPG',
      text: 'Koh Chang, Thailand'
    },
    {
      image: '/photos/Scotland.JPG',
      text: 'Isle of Skye, Scotland'
    },
    {
      image: '/photos/Charlotte3.JPG',
      text: 'Uptown Charlotte, NC'
    },
    {
      image: '/photos/PonteVecchio.JPG',
      text: 'Florence, Italy'
    }
    ,
    {
      image: '/photos/Miami.JPG',
      text: 'Miami Beach, FL'
    }
    ,
    {
      image: '/photos/Manhattan.JPG',
      text: 'New York City'
    }
    ,
    {
      image: '/photos/Tampa2.JPG',
      text: 'Tampa, FL'
    }
  ];
}