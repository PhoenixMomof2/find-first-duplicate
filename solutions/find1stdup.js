// Given an Array, find the first duplicate value that occurs. If there are no duplicates, return -1.

let input1 = [2, 1, 3, 3, 2]
// Output: 3

let input2 = [ 1, 2, 3, 4]
// Output: -1

let input3 =  [7, 8, 9, 10]
// Output: -1

let input4 = [22, 13, 6, 22]
// Output: 22

// Map over an array until I find the given input, note the value, 
// and keep looking until I find a second
// if I do, return -1.  If no duplicate found, else return input.

const find_dup = (input) => {
   
  for(let i = 0; i < input.length; i++) {
    
    for(let j = i + 1; j < input.length; j++) {
        if (input[i] === input[j]) {
          return input[i]
        }        
    }
  }
  return -1
}
console.log(find_dup(input1))
console.log(find_dup(input2))
console.log(find_dup(input3))
console.log(find_dup(input4))
