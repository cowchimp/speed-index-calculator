/* Copied this code from browsertime (released under MIT)
 * https://github.com/tobli/browsertime/commit/069ff23e9fd22a137e25c113825be995648eebe0#diff-34d79047eaa3f1b1a5b0b224f236afc3R24
 * Waiting for visualmetrics to implement this natively
 * https://github.com/WPO-Foundation/visualmetrics/issues/10 */

var metricNames = {
  firstVisualChange: 'First Visual Change',
  lastVisualChange: 'Last Visual Change',
  speedIndex: 'Speed Index'
};

exports.parse = function(result) {
  var metrics = {};

  Object.keys(metricNames).forEach(function(metricsName) {
    if (result.indexOf(metricNames[metricsName]) > -1) {
      var reg = metricNames[metricsName] + ': ([0-9]*)?';
      metrics[metricsName] = parseInt(result.match(reg)[1]);
    }
  });

  return metrics;
};