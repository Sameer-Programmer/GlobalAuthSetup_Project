

// Task Move zeros to right side last
let arr3 =[4,5,1,2,0,4]
let fre : {[key:number]:number}= {}

for(let i = 0 ; i<arr3.length; i++){
    let ch = arr3[i];
    if(fre[ch]){
        fre[ch] = fre[ch] +1
    }else {
         fre[ch] = 1
    }
}
console.log(fre)

//tsx Practice/Test1.ts