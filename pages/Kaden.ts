//Find the sub Array with largest sum 

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let startIndex =0;
let endIndex=0
 
let maxSum = 0;

for(let i = 0; i<arr.length;i++){
    let currentSum =0
    for(let j = i; j<arr.length;j++){
        currentSum = currentSum+arr[j]
        if(currentSum>maxSum){
            maxSum = currentSum;
            startIndex =i
            endIndex =j
        }

    }
}

console.log(maxSum)
console.log(arr.slice(startIndex,endIndex+1))


