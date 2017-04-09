// --------------------
// Google code jam 2017
// Qualification Round - B
// Markus Wind
// --------------------

var fs = require('fs');

var fileName  = 'B-large';
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
        var wrongIndex = getWrongIndex(lastNumber);

        if (wrongIndex === 0) {
            printResult(caseNumber, lastNumber);
            finished = true;
        } else {
            lastNumber = lastNumber - (lastNumber % Math.pow(10, wrongIndex));
            lastNumber--;
        }

        finished = (lastNumber < 0) ? true : finished;
    }
}

var getWrongIndex = function(number) {
    var previousNumber = 10;
    var skippedIndex   = 0;
    var wrongIndex     = 0;

    while(number > 0) {
        var lastNumber        = number % 10;
        var stringifiedNumber = number.toString();

        wrongIndex     = (lastNumber > previousNumber) ? skippedIndex : wrongIndex;
        previousNumber = lastNumber

        number         = (number > 10000) ? parseInt(stringifiedNumber.substring(0, stringifiedNumber.length - 1)) : Math.floor(number / 10);

        skippedIndex++;
    }

    console.log('wrongIndex', wrongIndex);
    return wrongIndex;
}

var printResult = function(caseNumber, numberOfFlips) {
    var resultString = 'Case #' + caseNumber + ': ' + numberOfFlips;

    fs.appendFileSync('./' + fileName + '.out', resultString + '\n');
    console.log('Case #' + caseNumber + ': ' + numberOfFlips);
}

main();