// --------------------
// Google code jam 2017
// Qualification Round - B
// Markus Wind
// --------------------

var fs = require('fs');

var fileName  = 'B-small-attempt0';
var inputFile = fs.readFileSync(fileName + '.in');

var main = function() {
    fs.existsSync(fileName + '.out') && fs.unlinkSync(fileName + '.out');

    var startTime = new Date();
    console.log('Calculating last tidy numbers ...');

    readInputFile();

    var endTime = new Date();
    console.log('Done! (Finished in ' + (endTime - startTime) + 'ms)');
}

var readInputFile = function() {
    var lines = inputFile.toString().split('\n');

    for (var caseNumber = 1; caseNumber < lines.length - 1; caseNumber++) {
        var N = lines[caseNumber];

        getLastTidyNumber(caseNumber, N.trim());
    }
}

var getLastTidyNumber = function(caseNumber, N) {
    var lastNumber = parseInt(N);
    var finished   = false;

    while (!finished) {
        var numberArray = lastNumber.toString().split('');

        if (numberArray.length > 1) {
            for (var index = 0; index < numberArray.length - 1; index++) {
                var currentSelectedNumber = parseInt(numberArray[index]);
                var nextSelectedNumber    = parseInt(numberArray[index + 1]);
                var isLastIteration       = (index + 1 === numberArray.length - 1);

                if (currentSelectedNumber > nextSelectedNumber) {
                    lastNumber--;
                    break;
                } else if (isLastIteration) {
                    finished = true;
                }
            }
        } else {
            finished = true;
        }
    }

    printResult(caseNumber, lastNumber);
}

var printResult = function(caseNumber, numberOfFlips) {
    var resultString = 'Case #' + caseNumber + ': ' + numberOfFlips;

    fs.appendFileSync('./' + fileName + '.out', resultString + '\n');
    console.log('Case #' + caseNumber + ': ' + numberOfFlips);
}

main();