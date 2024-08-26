const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let value = "";
    
    for(i = 0; i < str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            value += str[i].toLowerCase();  // 대문자 -> 소문자
        } else {
            value += str[i].toUpperCase(); // 소문자 -> 대문자
        }
    }
    
    console.log(value);
});