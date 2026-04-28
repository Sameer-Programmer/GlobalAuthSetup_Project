let string = "Welcome to the Arrays Learning Topic is Arrays";
let process: string[] = [];
let processIndex = 0;
let unique: string[] = [];
let duplicate: string[] = [];

let arr = string.split(" ");
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    let ch = arr[i];
    let count = 0;
    let flag = false;
    //Restrict Duplicate Entries
    for (let j = 0; j < process.length; j++) {
        if (process[j] === ch) {
            flag = true;
            break;
        }
    }

    if (!flag) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] === ch) {
                count = count + 1;
            }
        }

        process[processIndex] = ch;
        processIndex++;
    }

    if (count === 1) {
        unique.push(ch);
    }

    if (count > 1) {
        duplicate.push(ch);
    }
}

console.log(arr);
console.log(process);
console.log(unique);
console.log(duplicate);
