const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', input => {
    let inputs = input.split(" ");
    console.log(parseInt(inputs[0])+parseInt(inputs[1]));
    rl.close();
});