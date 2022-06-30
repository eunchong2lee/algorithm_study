// 내가 푼 풀이

// 빈 배열을 하나 만들어서 변수를 선언해주고,
// 숫자를 하나씩 넣고(for문) 비교값으로 k를 넣어주면서(while문)을 돌려주는 식으로 문제를 풀면 된다.

function solution(number, k) {
  var answer = [];
  number = number.split('');
  
  for (let i = 0; i < number.length; i <= i) {
    if (answer.length == 0) {
    answer.push(number[i]);
      continue;
    }
    
    while (k > 0 && answer[answer.length -1] < number[i]) {
      answer.pop();
      k--;
    }
    
    answer.push(number[i]);
  }
  return answer.join('').substr(0, answer.length - k);
}

// 정답 풀이
