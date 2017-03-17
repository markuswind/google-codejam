# Google code jam 2016
# Qualification Round - ..
# Markus Wind

import time

input_file = open('C-small-example.in', 'r')
output_file = open('C-small-example.out', 'wb')

def jam_coins(caseNumber, N, J):
    jamcoin = create_jamcoin(N)
    base_values = create_base_values(jamcoin)
    result = get_result(N, J, jamcoin, base_values)

    print_result(caseNumber, result)

def create_base_values(jamcoin):
    base_values = [None] * 11
    jamcoin_string = '' . join(jamcoin)

    for base in range(2, 11):
        base_values[base] = int(jamcoin_string, base)

    return base_values

def create_jamcoin(N):
    jamcoin = ['0'] * N
    jamcoin[N - 1] = '1'
    jamcoin[N / 2 - 1] = '1'

    return jamcoin

def get_result(N, J, jamcoin, base_values):
    result_string = ''

    new_jamcoin = ['0'] * N
    new_jamcoin[N / 2] = '1'
    new_jamcoin_string = '' .join(new_jamcoin)

    index = 0
    count = 1
    while count < J:
        add = int(new_jamcoin_string, 2)
        add += int(new_jamcoin_string, index)

        result = add * base_values[2]
        # todo

        index += 1
        count += 1
    
    new_base_values = base_values[2]

    return result_string

def print_result(caseNumber, result):
    print "Case #{}:\n {}".format(caseNumber, result)

    output_file.write("Case #{}:\n {}\n".format(caseNumber, result))

def read_input_file():
    numberOfCases = int(input_file.readline())

    for caseNumber in xrange(1, numberOfCases + 1):
        line = input_file.readline().strip("\n")

        N = int(line.split(' ')[0])
        J = int(line.split(' ')[1])

        jam_coins(caseNumber, N, J)


print "Starting coinjam"

start_time = time.time()

read_input_file()
input_file.close()
output_file.close()

end_time = round((start_time - time.time()) / 1000, 2)

print "Done! (Finished in {}ms)".format(end_time)
