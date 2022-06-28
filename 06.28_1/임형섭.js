// 내가 푼 풀이
let input = require('fs').readFileSync('/dev/stdin');
let count = 0
for(let i =0; i<){
    if(input%5===0){
        count += input/5
    }
    else {
        Math.floor(input/5)
    }
}







// 정답 풀이
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let N = Number(input);
let five = 0;
let three = 0;

while(true){
    if(N % 5 === 0){
        five = N / 5;
        console.log(five + three);
        break;
    }
    if(N < 0){
        console.log(-1);
        break;
    }
    N = N - 3;
    three++;