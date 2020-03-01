let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let result =0;
const rep = input[0];
const data = input.slice(1);
for(let r = 1; r <= rep*2 ; r+=2){
    const _s = data[r-1]; //층
    const _n = data[r]; //호
    //
    let m = [];
    //first line
    let line = [];
    for(let i=1; i<=_n; i++){
        line.push(i);
    }
    m.push(line);
    //upper lines
    for(let s=1; s<=_s; s++){
        line = [];
        for(let n=1; n<=_n; n++){
            line.push(sumArrayToIndex(m[s-1],n));
        }
        m.push(line);
    }
    result = m[_s][_n-1];
    console.log(result);
}

function sumArrayToIndex(array,index){
    let sum = 0;
    for(let i=0; i<index; i++){
        sum+= array[i];
    }
    return sum;
}