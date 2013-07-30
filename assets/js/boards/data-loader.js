define(['jquery'], function ($) {
  'use strict';
  var proxyPrefix = '/json/',
      getUrl = function (opts) {
        var url = opts.url;
        if (opts.proxy) {
          url = proxyPrefix + encodeURIComponent(url);
        }
        return url;
      };

  return function (opts) {
    return $.ajax(getUrl(opts), {
      dataType: 'json'
    }).then(function (data) {
      if (opts.filter && typeof opts.filter === 'function') {
        data = opts.filter.call(null, data);
      }
      return data;
    });
  };
});