let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(let rep = 0; rep < input[0]; rep++){
    const data = input[rep+1].split(' ');

    //distance는 현재 두 점 사이의 거리
    const distance = data[1]-data[0];

    //level은 n^2수들의 n => 1,2,4,9...
    let level = parseInt(Math.sqrt(distance));

    //level_count는 level의 최소 시행수
    let level_count = level + level - 1;

    //remainDistance는 level distance에서 현재 distance를 뺀 나머지 distance
    let remainDistance = distance-Math.pow(level,2);

    //calculate
    let result = 0;
    if(remainDistance == 0){
        result = level_count;
    } else if(remainDistance <= level){
        result = level_count+1;
    } else {
        result = level_count+2;
    }

    console.log(result);
}
