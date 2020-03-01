const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
    let rep = input[0];
    let data = input.slice(1);
    if(input.length>input[0]){
        for(let i = 0; i < rep ; i++){
            const currentData = data[i];
            let split = currentData.split(' ');
            let h = split[0];
            let w = split[1];
            let n = split[2];
            console.log(h,w,n);
        }
        rl.close();
    }
});