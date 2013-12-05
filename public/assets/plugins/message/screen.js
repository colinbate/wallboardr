define(['require', './parsers', './admin', 'lib/bigtext'], function (require) {
  'use strict';
  var parsers = require('./parsers'),
      plugin = require('./admin'),
      localScreen = function () {
        var self = this,
            viewData;
        return {
          getViewData: function () {
            var lines = parsers.parse(self.props.data.message);
            viewData = {lines: lines, title: lines.title ? self.props.name : ''};
            return viewData;
          },
          preShow: function () {
            if (viewData.lines.bigtext) {
              self.$screen.bigtext();
            } else {
              self.maximizeTextSize();
            }
          }
        };
      };

  localScreen.config = plugin.config;
  return localScreen;
});