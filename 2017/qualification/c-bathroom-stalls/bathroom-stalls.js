// --------------------
// Google code jam 2017
// Qualification Round - C
// Markus Wind
// --------------------

var fs = require('fs');

var fileName  = 'C-small-2-attempt0';
var inputFile = fs.readFileSync(fileName + '.in');

var main = function() {
    fs.existsSync(fileName + '.out') && fs.unlinkSync(fileName + '.out');

    var startTime = new Date();
    console.log('Calculating y and z ...');

    readInputFile();

    var endTime = new Date();
    console.log('Done! (Finished in ' + (endTime - startTime) + 'ms)');
}

var readInputFile = function() {
    var lines = inputFile.toString().split('\n');

    for (var caseNumber = 1; caseNumber < lines.length - 1; caseNumber++) {
        var N = parseInt(lines[caseNumber].split(' ')[0]);
        var K = parseInt(lines[caseNumber].split(' ')[1]);

        calculateYandZ(caseNumber, N, K);
    }
}

var calculateYandZ = function(caseNumber, N, K) {
    if ((N !== K) && (K < (N / 2))) {
        var stalls = [N];

        for (var currentPerson = 0; currentPerson < K; currentPerson++) {
            var preferredLocation = stalls.indexOf(Math.max.apply(Math, stalls));
            var maxStalls         = parseInt(stalls[preferredLocation] / 2);

            if (stalls[preferredLocation] % 2 === 0) {
                stalls[preferredLocation] = parseInt((stalls[preferredLocation] / 2 - 1));
                stalls.splice(preferredLocation, 0, stalls[preferredLocation] + 1);
            } else {
                stalls[preferredLocation] = parseInt(stalls[preferredLocation] / 2);
                stalls.splice(preferredLocation, 0, stalls[preferredLocation]);
            }

            // stalls = getArrayWithUniqueValues(stalls);
        }

        printResult(caseNumber, maxStalls, Math.min.apply(Math, stalls));
    } else {
        printResult(caseNumber, 0, 0);
    }
}

var getArrayWithUniqueValues = function(array) {
    return array.reduce(function(a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    }, []);
}

var printResult = function(caseNumber, y, z) {
    var resultString = 'Case #' + caseNumber + ': ' + y + ' ' + z;

    fs.appendFileSync(fileName + '.out', resultString + '\n');
    console.log(resultString);
}

main();