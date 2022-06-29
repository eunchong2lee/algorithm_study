// 내가 푼 풀이
for (i=0; i<=5000; i++) {
    if (N<5) {
        -1
    }
    else if (N%5===0) {
        N/5
    }
    else if (N%5!==0){
        Math.floor(N%5) + 1
    }
    else if (N%3===0) {
        N/3
    }
    else if (N%3!==0){
        Math.floor(N%3) + 1
    }
}

// 정답 풀이


let input = require('fs').readFileSync('/dev/stdin');

let count = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break;
  }
    
  if (0 > input) {
    console.log(-1);
    break;
  }

  count++;
  input -= 3;
}