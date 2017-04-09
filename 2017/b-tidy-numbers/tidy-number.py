# Google code jam 2017
# Qualification Round - B
# Markus Wind

import time
import math

file_name = 'B-large';
input_file = open(file_name + '.in', 'r')
output_file = open(file_name  + '.out', 'w')

def main_function(caseNumber, number):
    print_result(caseNumber, get_last_tidy_number(number))

def get_last_tidy_number(number):
    while(number > 0):
        wrongIndex = get_wrong_index(number)

        if wrongIndex == 0:
            return number

        number = number - (number % pow(10, wrongIndex)) - 1

    return 0

def get_wrong_index(number):
    wrongIndex     = 0;
    skippedIndex   = 0;
    previousNumber = 0;

    while(number > 0):
        lastNumber = number % 10

        if lastNumber > previousNumber:
            wrongIndex = skippedIndex

        previousNumber = lastNumber

        if number > 100000:
            number = int(str(number)[:-1])
        else:
            number = math.floor(number / 10)

        skippedIndex = skippedIndex + 1

    return wrongIndex

def print_result(caseNumber, result):
    print("Case #{}: {}".format(caseNumber, result))

    output_file.write("Case #{}: {}\n".format(caseNumber, result))

def read_input_file():
    numberOfCases = int(input_file.readline())

    for caseNumber in range(1, numberOfCases + 1):
        # read input
        number = int(input_file.readline().rstrip())
        main_function(caseNumber, number)

print "Calculating last tidy numbers ..."

start_time = time.time()

read_input_file()
input_file.close()
output_file.close()

end_time = round((start_time - time.time()) / 1000, 2)

print "Done! (Finished in {}ms)".format(end_time)