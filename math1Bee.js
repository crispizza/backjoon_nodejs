const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
  let _input = parseInt(input);
  let _count = 1;
  if(_input!==1){
    let i=6;
    _input--;
    while(_input>0){
        _input -= i;
        _count++;
        i+=6;
    }
  }
  console.log(parseInt(_count));
  rl.close();
});