let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10]
let target = 12
//Expected iut put Max subarray =>0 to 3
//lets Print the Subarray 

for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = i; j < arr.length; j++) {
        sum = sum + arr[j];
        if (sum === target) {
            console.log(i, "to", j);
        }
    }
}