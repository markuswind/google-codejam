// --------------------
// Google code jam 2017
// Qualification Round - A
// Markus Wind
// --------------------

var fs = require('fs');

var fileName  = 'A-small-attempt1';
var inputFile = fs.readFileSync(fileName + '.in');

var main = function() {
    fs.existsSync(fileName + '.out') && fs.unlinkSync(fileName + '.out');

    var startTime = new Date();
    console.log('Flipping pancakes ...');
    readInputFile();
    var endTime = new Date();
    console.log('Done! (Finished in ' + (endTime - startTime) + 'ms)');
}

var readInputFile = function() {
    var lines = inputFile.toString().split('\n');

    for (var caseNumber = 1; caseNumber < lines.length - 1; caseNumber++) {
        var S = lines[caseNumber];

        flipPancakes(caseNumber, S.trim());
    }
}

var flipPancakes = function(caseNumber, S) {
    var numberOfFlips            = 0;
    var pileOfPancakes           = S.split(' ')[0];
    var numberOfConsecutiveFlips = parseInt(S.split(' ')[1]);

    if (pileOfPancakes.length >= numberOfConsecutiveFlips) {
        for (var index = 0; index < pileOfPancakes.length; index++) {
            var currentPancake = pileOfPancakes[index];

            if (currentPancake === '-') {
                numberOfFlips++;

                for (var offset = index; offset < index + numberOfConsecutiveFlips; offset++) {
                    if (offset <= pileOfPancakes.length - 1) {
                        var tempPancakes     = pileOfPancakes.split('');
                        tempPancakes[offset] = tempPancakes[offset] === '+' ? '-' : '+';

                        pileOfPancakes = tempPancakes.join('');
                    } else {
                        numberOfFlips = 'IMPOSSIBLE';
                        break;
                    }
                }
            }
        }

        printResult(caseNumber, numberOfFlips);
    } else {
        var impossible = (pileOfPancakes.indexOf('-') !== -1);

        printResult(caseNumber, impossible ? 'IMPOSSIBLE' : 0);
    }
}

var printResult = function(caseNumber, result) {
    var resultString = 'Case #' + caseNumber + ': ' + result;

    fs.appendFileSync(fileName + '.out', resultString + '\n');
    console.log('Case #' + caseNumber + ': ' + result);
}

main();