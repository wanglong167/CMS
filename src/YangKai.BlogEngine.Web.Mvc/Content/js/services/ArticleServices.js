﻿angular.module("ArticleServices", ["ngResource"]).factory("Article", [
  '$resource', function($resource) {
    return $resource("/api/post/:id", {
      id: '@id'
    }, {
      query: {
        method: "GET",
        params: {
          $top: 10,
          $orderby: 'CreateDate desc',
          $expand: 'Categorys,Tags,Group,Group.Channel'
        },
        isArray: true
      },
      nav: {
        method: "GET",
        params: {
          action: "nav"
        },
        isArray: true
      },
      related: {
        method: "GET",
        params: {
          action: "related"
        },
        isArray: true
      }
    });
  }
]);
