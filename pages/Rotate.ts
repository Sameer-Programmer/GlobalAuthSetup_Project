let arr = [1,2,3,4,5,6,7,8,9]

//out put =k =2 => 8,9, 1234567

/* 
step 1 = Reverse an array > [9, 8, 7, 6, 5,4, 3, 2, 1]
step 2 = Divide into Parts for reverse 
Part 1 = > 8,9 => Reverse First two > left = 0, right = k%arr.length-1
Part 2 = >  7, 6, 5,4, 3, 2, 1 => ==> Reverse after part 1 =>left = k, right = arr.length-1
1,2,3,4,5,6,7
*/

//Goal = 8,9,1,2,3,4,5,6,7
//reverse an array

let left = 0;
let right = arr.length-1;

while(left<right){
    let temp = arr[left];
    arr[left]= arr[right];
    arr[right]= temp;
    left++;
    right--;
}
console.log(arr) //[9, 8, 7, 6, 5,4, 3, 2, 1]

// swap with part of K 

let k = 2 
left = 0;
right = k%arr.length-1

console.log(right , "right Index")

while(left<right){
    let temp = arr[left];
    arr[left]= arr[right];
    arr[right]= temp;
    left++;
    right--;
}

console.log(arr)  //[ 8, 9, 7, 6, 5,4, 3, 2, 1]


left = k;
right = arr.length-1

while(left<right){
    let temp = arr[left];
    arr[left]= arr[right];
    arr[right]= temp;
    left++;
    right--;
}
console.log(arr)
