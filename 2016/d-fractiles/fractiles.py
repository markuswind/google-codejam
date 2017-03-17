# Google code jam 2016
# Qualification Round - ..

import time

input_file = open('D-small-example.in', 'r')
output_file = open('D-small-example.out', 'wb')

def fractiles(caseNumber, K, C, S): 
    print K, C, S

#    print_result(caseNumber, ...)

def print_result(caseNumber, result):
    print "Case #{}: {}".format(caseNumber, result)

    output_file.write("Case #{}: {}\n".format(caseNumber, result))

def read_input_file():
    numberOfCases = int(input_file.readline())

    for caseNumber in xrange(1, numberOfCases + 1):
        line = input_file.readline().strip("\n")

        K = line.split(' ')[0]
        C = line.split(' ')[1]
        S = line.split(' ')[2]

        fractiles(caseNumber, K, C, S) 

print "Starting fractiles" 

start_time = time.time()

read_input_file()
input_file.close()
output_file.close()

end_time = round((start_time - time.time()) / 1000, 2)

print "Done! (Finished in {}ms)".format(end_time)
