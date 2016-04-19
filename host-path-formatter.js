var driveLetterRegex = new RegExp(/^([a-zA-Z]):/);
var seperatorRegex = new RegExp(/\\/g);

exports.format = function(dirname) { //because Windows, that's why
  var hihihi = driveLetterRegex.exec(dirname);
  if(hihihi != null && hihihi.length >= 2) {
    var driveLetter = hihihi[1].toLowerCase();
    dirname = dirname.replace(driveLetterRegex, '/' + driveLetter);
  }

  dirname = dirname.replace(seperatorRegex, '/');
  return dirname;
};