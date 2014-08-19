'use strict';

PhonicsApp.service('Backend', ['$http', 'defaults', Backend]);

function Backend($http, defaults) {

  this.save = function (data) {
    return $http.put(defaults.backendEndpoint, data);
  };

  this.reset = noop;

  this.load = function () {
    return $http.get(defaults.backendEndpoint);
  };

  this.addChangeListener = noop;
}

function noop() {

}
