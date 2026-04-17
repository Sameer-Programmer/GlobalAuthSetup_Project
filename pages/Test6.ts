let arr = [11,2,3,4,5,5,6,7,8,8,9,9]

let frequency: { [key: number]: number } = {};

for(let ch of arr){
    
    if(frequency[ch]){
        frequency[ch] = frequency[ch]+1
    }else {
        frequency[ch] =1
    }
}

console.log(frequency)

let keys = Object.keys(frequency);
console.log(keys)
console.log(typeof keys)
// sorted and Unique Right
let numberKeys = Object.keys(frequency).map(Number);

console.log(numberKeys);
// It is Coming with sorting as Well 