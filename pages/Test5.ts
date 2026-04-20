//input = TestingWorld1234!
//output = 

// alphabetscontainer = Testing 
//numbercontainer = 1234
// speccontainer = ! 
// count_alphabets = 4
//count_numbers = 3
//count_special =1

// count , compare with condition 
// steps 
//logic

let input = "TestingWorld1234!"
let  alphabetscontainer = ""
let numbercontainer =""
let speccontainer =""

	let alphabetcount = 0 ;
	let numberscount = 0 ;
	let specialcount = 0 ;

for(let i =0 ; i<input.length; i++){
	
	let ch = input[i]
	let alphabetscheck = /[a-zA-Z]/.test(ch)
	let numberscheck =/[0-9]/.test(ch)
	let specialcharacterCheck = /[^a-zA-Z0-9]/.test(ch)

	
	if(alphabetscheck){
		alphabetscontainer = alphabetscontainer+ch;
		alphabetcount = alphabetcount+1
	}else if(numberscheck){
		numbercontainer = numbercontainer+ch
		numberscount++
	}else if(specialcharacterCheck){
		speccontainer = speccontainer+ch;
		specialcount++
	}
}


console.log(alphabetscontainer)
console.log(numbercontainer)
console.log(speccontainer)
console.log(alphabetcount)
console.log(alphabetscontainer)
console.log(specialcount)