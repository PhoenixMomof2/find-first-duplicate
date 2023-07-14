input1 = [2, 1, 3, 3, 2]
input2 = [ 1, 2, 3, 4]
input3 =  [7, 8, 9, 10]
input4 = [22, 13, 6, 22]

def find_dup(input)
  (0...input.length).each do |i|
    ((i + 1)...input.length).each do |j|
      if input[i] == input[j]
        return input[i]
      end
    end
  end
    return -1
end

puts find_dup(input1)
puts find_dup(input2)
puts find_dup(input3)
puts find_dup(input4)