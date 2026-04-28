// check digits Only 
let data = "12345";
let onlydigits = ''
let onlyAlphabets = ''
let onlyspecialcharacters = ''



for (let i = 0; i < data.length; i++) {
    let ch = data[i]
    let digitsCheck = /[0-9]/.test(ch)
    let alphabetsCheck = /[a-zA-Z]/.test(ch)
    let specialCharsCheck = /[^0-9A-Za-z]/.test(ch)

    if (digitsCheck) {
        onlydigits = onlydigits + ch
    }
    if (alphabetsCheck) {
        onlyAlphabets = onlyAlphabets + ch
    }

    if (specialCharsCheck) {
        onlyspecialcharacters = onlyspecialcharacters + ch
    }


}

console.log(onlyAlphabets);

if ((onlyAlphabets === '') && (onlyspecialcharacters === '')) {
    console.log("onlyDigits Present in given data")
}

