let givenString = "Testing123World4"

// onlyAlphabets = Testingworld4;
// onlyNumber = 1234

let onlyAlphabets =""
let onlyNumber =""



for(let i = 0 ; i<givenString.length; i++){
    
let alphabets =/[a-zA-Z]/.test(givenString.charAt(i))
let numbers =/[0-9]/.test(givenString.charAt(i))

	if(alphabets){
		onlyAlphabets = onlyAlphabets+givenString.charAt(i)
	}else if(numbers){
		onlyNumber=onlyNumber+givenString.charAt(i)
	}
}

console.log(onlyAlphabets)
console.log(onlyNumber)

