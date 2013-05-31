﻿
angular.module("app", ['formatFilters', 'MessageServices', 'ArticleServices']).config([
  "$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    return $routeProvider.when("/list/:channel/:group/:page/:type/:query", {
      templateUrl: "/partials/Article/list.html",
      controller: ArticleListController
    }).when("/list/:channel/:group/:type/:query", {
      templateUrl: "/partials/Article/list.html",
      controller: ArticleListController
    }).when("/list/:channel/:group/:page", {
      templateUrl: "/partials/Article/list.html",
      controller: ArticleListController
    }).when("/list/:channel/:group", {
      templateUrl: "/partials/Article/list.html",
      controller: ArticleListController
    }).when("/list/:channel", {
      templateUrl: "/partials/Article/list.html",
      controller: ArticleListController
    }).when("/post/:url", {
      templateUrl: "/partials/Article/detail.html",
      controller: ArticleDetailController
    }).when("/board", {
      templateUrl: "/partials/message.html",
      controller: BoardController
    }).when("/about", {
      templateUrl: "/partials/about.html",
      controller: AboutController
    }).when("/", {
      templateUrl: "/partials/index.html",
      controller: HomeController
    }).otherwise({
      redirectTo: "/"
    });
  }
]);