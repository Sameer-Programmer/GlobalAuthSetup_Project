// Arrays 
// Arrays

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let min = arr[0];
let max = arr[0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }

  if (arr[i] < min) {
    min = arr[i];
  }
  sum = sum + arr[i];
}

console.log("maximium Number is ", max);

console.log("Minimum Number is ", min);

console.log("sum  ", sum);


//here arr[i] is a Value Right 
// reverse[index] is what 

/* 
Final Answer
arr[i] is what?

✅ A value read from array.

reverse[index] is what?

✅ A position/element inside array where value can be stored or read.

Depending on side:
*/