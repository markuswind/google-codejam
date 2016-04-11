# Google code jam 2016
# Qualification Round - B
# Markus Wind

import time

input_file = open('B-large-practice.in', 'r')
output_file = open('B-large-practice.out', 'wb')

def flip_pancakes(caseNumber, pancakes):
    pileOfPancakes = list(pancakes)
    numberOfFlips = get_number_of_flips(pileOfPancakes)

    print_result(caseNumber, numberOfFlips)

def get_number_of_flips(pileOfPancakes):
    numberOfFlips = 0
    numberOfPancakes = len(pileOfPancakes)

    for index in range(1, numberOfPancakes):
        if pileOfPancakes[index] != pileOfPancakes[index -1]:
            numberOfFlips += 1

    if pileOfPancakes[numberOfPancakes - 1] == '-':
        numberOfFlips += 1

    return numberOfFlips

def print_result(caseNumber, numberOfFlips):
    print "Case #{}: {}".format(caseNumber, numberOfFlips)

    output_file.write("Case #{}: {}\n".format(caseNumber, numberOfFlips))

def read_input_file():
    numberOfCases = int(input_file.readline())

    for caseNumber in xrange(1, numberOfCases + 1):
        s = input_file.readline().strip('\n')

        flip_pancakes(caseNumber, s)

print "Flipping pancakes ..."

start_time = time.time()

read_input_file()

input_file.close()
output_file.close()

end_time = round((time.time() - start_time) * 1000, 2)

print "Done! (Finished in {}ms)".format(end_time)
