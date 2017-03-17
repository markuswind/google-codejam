# Google code jam 2016
# Qualification Round - ..
# Markus Wind 

import time

input_file = open('.in', 'r')
output_file = open('.out', 'wb')

def main_function(caseNumber, ...):

    print_result(caseNumber, ...)

def print_result(caseNumber, result):
    print "Case #{}: {}".format(caseNumber, result)

    output_file.write("Case #{}: {}\n".format(caseNumber, result))

def read_input_file():
    numberOfCases = int(input_file.readline())

    for caseNumber in xrange(1, numberOfCases + 1):
        # read input

        main_function(caseNumber, ...)

print "Starting ..."

start_time = time.time()

read_input_file()
input_file.close()
output_file.close()

end_time = round((start_time - time.time()) / 1000, 2)

print "Done! (Finished in {}ms)".format(end_time)
