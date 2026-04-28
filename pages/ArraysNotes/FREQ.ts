let arr = [1, 2, 3, 4, 1, 5, 6, 7, 8, 5];
let frequency: { [key: number]: number } = {};
let duplicates = []
let unique = []

for (let i = 0; i < arr.length; i++) {
    let ch = arr[i];

    if (frequency[ch]) {
        frequency[ch] = frequency[ch] + 1;
    } else {
        frequency[ch] = 1;
    }
}

console.log(frequency)


for (let i = 0; i < arr.length; i++) {

    let ch = arr[i];
    if (frequency[ch] === 1) {
        unique.push(ch)
    }

    if (frequency[ch] > 1) {
        if (duplicates.indexOf(ch) === -1) {
            duplicates.push(ch)
        }

    }

}

console.log(duplicates)
console.log(unique)