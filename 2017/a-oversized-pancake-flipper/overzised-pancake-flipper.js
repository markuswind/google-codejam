// --------------------
// Google code jam 2017
// Qualification Round - A
// Markus Wind
// --------------------

var fs = require('fs');

var fileName  = 'A-example';
var inputFile = fs.readFileSync(fileName + '.in');

var main = function() {
    clearOldOutputFile(function() {
        var startTime = new Date();

        console.log('Flipping pancakes ...');
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

        flipPancakes(caseNumber, S.trim());
    }
}

var flipPancakes = function(caseNumber, S) {
    var numberOfFlips            = 0;
    var pileOfPancakes           = S.substring(0, S.length - 3);
    var numberOfConsecutiveFlips = parseInt(S.slice(-1));

    if (pileOfPancakes.length > numberOfConsecutiveFlips) {
        for (var index = 0; index < pileOfPancakes.length; index++) {
            var currentPancake = pileOfPancakes[index];

            if (currentPancake === '-') {
                numberOfFlips++;

                for (var offset = index; offset < index + numberOfConsecutiveFlips; offset++) {
                    var tempPancakes     = pileOfPancakes.split('');
                    tempPancakes[offset] = tempPancakes[offset] === '+' ? '-' : '+';

                    pileOfPancakes = tempPancakes.join('');
                }
            }
        }

        printResult(caseNumber, numberOfFlips);
    } else {
        var impossible = (pileOfPancakes.indexOf('-') !== -1);

        printResult(caseNumber, impossible ? 'IMPOSSIBLE' : 0);
    }
}

var printResult = function(caseNumber, numberOfFlips) {
    var resultString = 'Case #' + caseNumber + ': ' + numberOfFlips;

    fs.appendFileSync('./' + fileName + '.out', resultString + '\n');
    console.log('Case #' + caseNumber + ': ' + numberOfFlips);
}

main();