const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', input => {
    //inputs
    let inputs = input.split(" ");
    let l_day = parseInt(inputs[0]);
    let l_night = parseInt(inputs[1]);
    let l_tree = parseInt(inputs[2]);

    //cals
    if((l_tree-l_night)%(l_day-l_night)===0){
        console.log(parseInt((l_tree-l_night)/(l_day-l_night)));
    }else{
        console.log(parseInt((l_tree-l_night)/(l_day-l_night)+1));
    }

    //output
    rl.close();
});