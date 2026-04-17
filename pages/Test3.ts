// Find first non-repeating character

// Input:  "aabbcde"
// Output: "c"

let input = "aabbcde";

for (let i = 0; i < input.length; i++) {
  let ch = input.charAt(i);
  let count = 0;

  for (let j = 0; j < input.length; j++) {
    let jch = input.charAt(j);
    if (ch === jch) {
      count += 1;
    }
  }
  if (count === 1) {
    console.log(ch)
  }


}
