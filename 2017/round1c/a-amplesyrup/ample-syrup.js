// --------------------
// Google code jam 2017
// Round 1C - Problem A
// Markus Wind
// --------------------

var fs = require('fs');

var fileName  = 'A-small-attempt3';
var inputFile = fs.readFileSync(fileName + '.in');

var main = function() {
    fs.existsSync(fileName + '.out') && fs.unlinkSync(fileName + '.out');

    var startTime = new Date();
    console.log('Calculating maximum possible exposed pancakes surfaces ...');

    readInputFile();

    var endTime = new Date();
    console.log('Done! (Finished in ' + (endTime - startTime) + 'ms)');
}

var readInputFile = function() {
    var lines      = inputFile.toString().split('\n');
    var caseNumber = 1;

    for (var lineNumber = 1; lineNumber < lines.length - 1; lineNumber++) {
        var N        = lines[lineNumber].split(' ')[0].trim();
        var K        = lines[lineNumber].split(' ')[1].trim();
        var pancakes = [];

        for (var pancakeIndex = 0; pancakeIndex < N; pancakeIndex++) {
            lineNumber++;

            pancakes.push({
                R: lines[lineNumber].split(' ')[0].trim(),
                H: lines[lineNumber].split(' ')[1].trim()
            })
        }

        calculateMaximumPossibleExposedPancakeSurfaces(caseNumber, K, pancakes);

        caseNumber++;
    }
}

var calculateMaximumPossibleExposedPancakeSurfaces = function(caseNumber, K, pancakes) {
    var maximumPossibleExposedPancakesSurfaces = 0;
    var totalSurfaceSide                       = 0;

    for (var index = 0; index < pancakes.length; index++) {
        pancakes[index].surfaceTop  = getSurfaceTop(pancakes[index]);
        pancakes[index].surfaceSide = getSurfaceSide(pancakes[index]);
        pancakes[index].surface     = pancakes[index].surfaceTop + pancakes[index].surfaceSide
    }

    pancakes = sortPancakes(pancakes);

    for (var surfaceIndex = 0; surfaceIndex < K; surfaceIndex++) {
        totalSurfaceSide += pancakes[surfaceIndex].surfaceSide;
    }

    maximumPossibleExposedPancakesSurfaces = pancakes[0].surfaceTop + totalSurfaceSide;

    printResult(caseNumber, maximumPossibleExposedPancakesSurfaces);
}

var getSurfaceTop = function(pancake) {
    return Math.PI * Math.pow(pancake.R, 2);
}

var getSurfaceSide = function(pancake) {
    return 2 * (Math.PI * pancake.R) * pancake.H;
}

var sortPancakes = function(pancakes) {
    pancakes.sort(function (A, B) {
        return B.surface - A.surface;
    });

    return pancakes;
}

var printResult = function(caseNumber, result) {
    var resultString = 'Case #' + caseNumber + ': ' + result;

    fs.appendFileSync(fileName + '.out', resultString + '\n');
    console.log('Case #' + caseNumber + ': ' + result);
}

main();