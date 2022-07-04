// 내가 푼 풀이
function solution(numbers) {
  var answer = numbers
      .sort((a, b) => {
          a = a.toString();
          b = b.toString();
          // 문자열 비교
          return (b + a) - (a + b);
          // 만약에 3,30일때 330 - 303이므로 3을 앞으로 솔트함
      })
      .join('');
  
  if(answer[0]==='0'){
    answer= '0';
  }
  // 0,0,0,0 일 경우 0을 리턴

  return answer
}

let numbers= [0,0,0,]
console.log(solution(numbers));


// 정답 풀이

function solution(numbers) {
    var answer = numbers.map(v=>v+'')
                        .sort((a,b) => (b+a)*1 - (a+b)*1)
                        .join('');

    return answer[0]==='0'?'0':answer;
}