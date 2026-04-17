// "Remove Duplicates and Print 
// input = aabbcc
// output = abc"
// need one more Variable because of New Output 
//patteren = compare -flag
//

let data = "aabbcc"
let result = ""


for(let i = 0 ; i<data.length; i++){
    let ch = data[i]
    let flagDuplicates = false  
    
    for(let j = 0 ; j<result.length; j++){
        if(result[j]==ch){
            flagDuplicates = true ;
            break;
        }
    }
    
    if(!flagDuplicates){
      result = result +ch
    }
}

console.log(result)
