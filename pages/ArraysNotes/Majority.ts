let arr = [1,2,3,1,1]
//count = n/
// =4/2=2
// n =arr.length

for(let i = 0; i<arr.length; i++){
    let count =0
    for(let j =0; j<arr.length;j++){
        if(arr[j]===arr[i]){
            count =count+1
        }
    }
    if(count>arr.length/2){
        console.log(arr[i])
        break;
    }
}