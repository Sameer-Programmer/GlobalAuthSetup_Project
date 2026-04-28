let data = " I am Learning Java"
let capitalAlphabets ="";
let smallAlphabets ="";
let smallAlphabetsCount =0 ;
let capitalAlphabetsCount =0;

for(let i =0 ; i<data.length; i++){
    let ch = data[i]
    let smallAlphabetsCheck = /[a-z]/.test(ch);
    let capitalAlphabetsCheck = /[A-Z]/.test(ch);

    if(smallAlphabetsCheck){
        smallAlphabetsCount++
    }else if(capitalAlphabetsCheck){
        capitalAlphabetsCount++
    }
}

console.log(smallAlphabetsCount);
console.log(capitalAlphabetsCount);