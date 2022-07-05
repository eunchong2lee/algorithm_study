// 내가 푼 풀이

function solution(numbers) {
  // number의 요소를 string으로 만들고 정렬
  const string = numbers.map((num) => String(num));
  string.sort((a, b) => {
    // b + a 숫자와 a + b 숫자를 비교해서 내림차순으로 정렬
    return parseInt(b + a) - parseInt(a + b);
  })
  // 만들어진 배열 문자열로 변환
  const answer = string.join('');
  return answer[0] === '0' ? '0' : answer;
}

// 정답 풀이
