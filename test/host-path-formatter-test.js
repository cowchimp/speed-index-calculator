var target = require('../host-path-formatter');
var assert = require('assert');

describe('hostPathFormatter', function() {
  describe('format', function() {
    it('should return linux style format suitable for Docker `Binds` even if in Windows', function() {
      var expected = '/c/Users/admin/some-folder/some-sub-folder';

      var result = target.format('C:\\Users\\admin\\some-folder\\some-sub-folder');

      assert.equal(result, expected);
    });
  });
});