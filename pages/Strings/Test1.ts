// Print All Substrings

let data = "12346";

for (let i = 0; i < data.length; i++) {

    let temp = "";

    for (let j = i; j < data.length; j++) {

        temp = temp + data[j];
        console.log(temp);
    }
}