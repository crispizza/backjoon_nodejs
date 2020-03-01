let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let rep = input[0];
let data = input.slice(1);
for(let r = 0; r < rep ; r++){
    const currentData = data[r];
    let split = currentData.split(' ');
    let h = split[0];
    let n = split[2];
    let h_result = 0;
    let w_result = 0;
    while(n>0){
        w_result++;
        n -= h;
    }
    h_result = h - Math.abs(n);
    if(w_result<10){
        w_result = "0"+w_result.toString();
    }
    console.log(parseInt(h_result.toString()+w_result));
}