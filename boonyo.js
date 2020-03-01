const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result =0;
rl.on('line', function (rrrr) {
    input.push(rrrr);
    const rep = input[0];
    const data = input.slice(1);
    if(input.length>input[0]*2){
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
            // console.log(m[_s][_n-1]);
            result = m[_s][_n-1];
        }
        // rl.close();
    }
}).on("close",()=>{
    console.log(result);
    process.exit();
});

function sumArrayToIndex(array,index){
    let sum = 0;
    for(let i=0; i<index; i++){
        sum+= array[i];
    }
    return sum;
}