// --------------------
// Google code jam 2017
// Round ..
// Markus Wind
// --------------------

var fs = require('fs');

var fileName  = '';
var inputFile = fs.readFileSync(fileName + '.in');

var main = function() {
    clearOldOutputFile(function() {
        var startTime = new Date();

        console.log('...');
        readInputFile();
        console.log('Done! (Finished in ' + (new Date() - startTime) + 'ms)');
    });
}

var clearOldOutputFile = function(callback) {
    var filePath = './' + fileName + '.out';

    fs.exists(filePath, function(exists) {
        exists && fs.unlink(filePath);
        callback();
    });
}

var readInputFile = function() {
    var lines = inputFile.toString().split('\n');

    for (var caseNumber = 1; caseNumber < lines.length; caseNumber++) {
        var S = lines[caseNumber];

        // function(caseNumber, S);
    }
}

var printResult = function(caseNumber, numberOfFlips) {
    var resultString = 'Case #' + caseNumber + ': ' + numberOfFlips;

    fs.appendFileSync('./' + fileName + '.out', resultString + '\n');
    console.log('Case #' + caseNumber + ': ' + numberOfFlips);
}

main();