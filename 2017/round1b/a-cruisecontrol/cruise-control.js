// --------------------
// Google code jam 2017
// Round 1B - Problem A
// Markus Wind
// --------------------

var fs = require('fs');

var fileName  = 'A-large';
var inputFile = fs.readFileSync(fileName + '.in');

var main = function() {
    fs.existsSync(fileName + '.out') && fs.unlinkSync(fileName + '.out');

    var startTime = new Date();
    console.log('Calculating maximum speed ...');

    readInputFile();

    var endTime = new Date();
    console.log('Done! (Finished in ' + (endTime - startTime) + 'ms)');
}

var readInputFile = function() {
    var lines      = inputFile.toString().split('\n');
    var caseNumber = 1;

    for (var lineNumber = 1; lineNumber < lines.length - 1; lineNumber++) {
        var D      = lines[lineNumber].split(' ')[0].trim();
        var N      = lines[lineNumber].split(' ')[1].trim();
        var horses = [];

        for (var horseIndex = 0; horseIndex < N; horseIndex++) {
            lineNumber++;

            horses.push({
                K: lines[lineNumber].split(' ')[0].trim(),
                S: lines[lineNumber].split(' ')[1].trim()
            });
        }

        calculateMaximumSpeed(caseNumber, D, N, horses);

        caseNumber++;
    }
}

var calculateMaximumSpeed = function(caseNumber, D, N, horses) {
    var slowestNumberOfHours = -1;

    for (var index = 0; index < horses.length; index++) {
        var horse   = horses[index];
        var kmToRun = D - horse.K;
        var maxKm   = horse.S;

        var numberOfHours = kmToRun / maxKm;

        if (slowestNumberOfHours) {
            if (numberOfHours > slowestNumberOfHours) {
                slowestNumberOfHours = numberOfHours;
            }
        }
    }

    printResult(caseNumber, (D / slowestNumberOfHours).toFixed(6));
}

var printResult = function(caseNumber, result) {
    var resultString = 'Case #' + caseNumber + ': ' + result;

    fs.appendFileSync(fileName + '.out', resultString + '\n');
    console.log('Case #' + caseNumber + ': ' + result);
}

main();