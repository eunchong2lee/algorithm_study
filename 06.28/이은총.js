// 내가 푼 풀이
let N = require('fs').readFileSync('/dev/stdin');
let result=0;
let count = 0;

while (true) {
  // break가 될때 까지
  if (N % 5 === 0) {
  // 5를 나눈 나머지 값이 0이 될때 까지 반복한다.
    result = N / 5 + count;
    break;
  }
    
  if (0 > N) {
  // 만약에 반복중에 3을 뺐을 경우 N이 마이너스 값이 나오면 -1로 리턴한다.
    result = -1
    break;
  }

  count++;
  N -= 3;
  // 3을 빼주면서 count ++을 해준다.
  // 3의 봉지 갯수 구하는 방법.
}


console.log(result);


// 정답 풀이