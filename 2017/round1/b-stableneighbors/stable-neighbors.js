// --------------------
// Google code jam 2017
// Round 1B - Problem 2
// Markus Wind
// --------------------

var fs = require('fs');

var fileName  = 'B-example';
var inputFile = fs.readFileSync(fileName + '.in');

var main = function() {
    fs.existsSync(fileName + '.out') && fs.unlinkSync(fileName + '.out');

    var startTime = new Date();
    console.log('Getting unicorn placement order ...');

    readInputFile();

    var endTime = new Date();
    console.log('Done! (Finished in ' + (endTime - startTime) + 'ms)');
}

var readInputFile = function() {
    var lines = inputFile.toString().split('\n');

    for (var caseNumber = 1; caseNumber < lines.length; caseNumber++) {
        var N            = parseInt(lines[caseNumber].split(' ')[0].trim());
        var unicornArray = lines[caseNumber].split(' ');

        var result = getUnicornPlacementOrder(caseNumber, N, [
            { color: 'R', amount: parseInt(unicornArray[1].trim())},
            { color: 'O', amount: parseInt(unicornArray[2].trim())},
            { color: 'Y', amount: parseInt(unicornArray[3].trim())},
            { color: 'G', amount: parseInt(unicornArray[4].trim())},
            { color: 'B', amount: parseInt(unicornArray[5].trim())},
            { color: 'V', amount: parseInt(unicornArray[6].trim())}
        ]);

        printResult(caseNumber, result);
    }
}

getUnicornPlacementOrder = function(caseNumber, N, unicorns) {
    console.log('caseNumber: ' + caseNumber);

    var done           = false;
    var placementOrder = '';

    while (!done) {
        placementOrder = '';

        var initialIndex  = 0;
        var loopColors    = true;
        
        while(initialIndex < unicorns.length) {
            var unicornsClone = unicorns;

            // FIXME: - loop doesn't get all colors when initialIndex > 0
            for (var colorIndex = initialIndex; colorIndex < unicornsClone.length; colorIndex++) {
                var color  = unicornsClone[colorIndex].color;
                var amount = unicornsClone[colorIndex].amount;

                if (amount > 0) {
                    var leftIndex  = colorIndex - 1;
                    var rightIndex = colorIndex + 1;

                    if (colorIndex === 0) {
                        leftIndex = unicornsClone.length - 1;
                    } else if (colorIndex === unicornsClone.length - 1) {
                        rightIndex = 0;
                    }

                    if (placementOrder === '') {
                        placementOrder = placementOrder + color;
                        unicornsClone[colorIndex].amount = unicornsClone[colorIndex].amount - 1;
                    } else {
                        var lastHorse = placementOrder.substr(placementOrder.length - 1);

                        if (lastHorse !== unicornsClone[leftIndex].color && lastHorse !== unicornsClone[rightIndex].color) {
                            placementOrder = placementOrder + color;
                            unicornsClone[colorIndex].amount = unicornsClone[colorIndex].amount - 1;
                        }
                    }
                }
            }

            if (placementOrder.length === N) {
                done = true;
                initialIndex = unicornsClone.lenght + 100; // break;
                break;
            }

            initialIndex++;
        }

        placementOrder = 'IMPOSSIBLE';
        done           = true;
    }

    return placementOrder;
}

var printResult = function(caseNumber, result) {
    var resultString = 'Case #' + caseNumber + ': ' + result;

    fs.appendFileSync(fileName + '.out', resultString + '\n');
    console.log('Case #' + caseNumber + ': ' + result);
}

main();