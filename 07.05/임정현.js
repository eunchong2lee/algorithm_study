// 내가 푼 풀이
function solution(numbers) {
  const strings = numbers.map((num) => num + '');
  const answer = strings.sort((a, b) => (b + a) - (a + b)).join('');

  return answer[0] === '0' ? '0' : answer
}




console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));






// 정답 풀이