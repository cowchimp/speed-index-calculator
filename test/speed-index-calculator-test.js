var speedIndexCalculator = require('../index');
var p = require('path');
var assert = require('assert');

describe('speedIndexCalculator', function() {
  this.timeout(15000);
  describe('calc', function() {
    it('should return the Speed Index when passed a valid video path', function(done) {
      var path =  p.join(process.cwd(), 'test', 'video.mp4');
      speedIndexCalculator.calc(path, function(err, result) {
        if(err) {
          throw err;
        }
        console.log(result);
        assert.equal(result.speedIndex, 3169);
        done();
      });
    });
  });
});