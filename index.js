var p = require('path');
var Docker = require('dockerode');
var concatStream = require('concat-stream');
var visualMetricsParser = require('./visualmetrics-parser');
var hostPathFormatter = require('./host-path-formatter');

var docker = new Docker();

exports.calc = function(path, callback) {
  var dirname = hostPathFormatter.format(p.dirname(path));
  var filename = p.basename(path);

  var result;
  var writeStream = concatStream(function(data) {
    result = data;
  });

  var volumeBinding = dirname + ':/tmp:ro';
  var startOptions = { 'Binds': [ volumeBinding ] };
  docker.run('wikimedia/visualmetrics', ['python', 'visualmetrics.py', '--video', '/tmp/' + filename, '--orange', '-k'], writeStream, { }, startOptions, function (err, data, container) {
    if(err) {
      callback(err);
      return;
    }
    if(data.StatusCode !== 0) {
      callback(new Error(result));
      return;
    }

    result = visualMetricsParser.parse(result);

    callback(null, result);
  });
};