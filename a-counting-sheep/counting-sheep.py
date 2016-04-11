# Google code jam 2016
# Qualification Round - A
# Markus Wind

import time

input_file = open('A-large-practice.in', 'r')
output_file = open('A-large-practice.out', 'wb')

def count_sheep(caseNumber, startingNumber):
    remainingDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    I = 1
    N = startingNumber

    if startingNumber == 0:
        print_result(caseNumber, "INSOMNIA")

        return

    while len(remainingDigits) > 0:
        N = I * startingNumber
        I = I + 1

        currentNumber = str(N)

        for index, digit in enumerate(currentNumber):
            digit = int(digit)

            if digit in remainingDigits:
                remainingDigits = delete_digit(digit, remainingDigits)

    print_result(caseNumber, N)

def delete_digit(seenDigit, remainingDigits):
    for index, digit in enumerate(remainingDigits):
        if digit == seenDigit:
            remainingDigits.pop(index)

            break

    return remainingDigits

def print_result(caseNumber, result):
    print "Case #{}: {}".format(caseNumber, result)

    output_file.write("Case #{}: {}\n".format(caseNumber, result))

def read_input_file():
    numberOfCases = int(input_file.readline())

    for caseNumber in xrange(1, numberOfCases + 1):
        n = input_file.readline().strip('\n')

        count_sheep(caseNumber, int(n))

print "Counting sheeps ..."

start_time = time.time()

read_input_file()

input_file.close()
output_file.close()

end_time = round((time.time() - start_time) * 1000, 2)

print "Done! (Finished in {}ms)".format(end_time)
