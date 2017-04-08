// --------------------
// Google code jam 2017
// Round ..
// Markus Wind
// --------------------

var fs = require('fs');

var fileName  = '';
var inputFile = fs.readFileSync(fileName + '.in');

var main = function() {
    fs.existsSync(fileName + '.out') && fs.unlinkSync(fileName + '.out');

    var startTime = new Date();
    console.log('...');
    readInputFile();
    var endTime = new Date();
    console.log('Done! (Finished in ' + (endTime - startTime) + 'ms)');
}

var readInputFile = function() {
    var lines = inputFile.toString().split('\n');

    for (var caseNumber = 1; caseNumber < lines.length; caseNumber++) {
        var S = lines[caseNumber];

        // function(caseNumber, S);
    }
}

var printResult = function(caseNumber, result) {
    var resultString = 'Case #' + caseNumber + ': ' + result;

    fs.appendFileSync(fileName + '.out', resultString + '\n');
    console.log('Case #' + caseNumber + ': ' + result);
}

main();