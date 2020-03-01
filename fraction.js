const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', input => {
    let top = 1;
    let bottom = 1;
    let row = 1;

    for(let i = 1 ; 0 < input-i ; i++){
      row++;
      input -= i;
    }

    if(row%2==1){ //odd
      top = row + 1 - input;
      bottom = input;
    } else { //even
      top = input;
      bottom = row + 1 - input;
    }

    console.log(top+"/"+bottom);
    rl.close();
});