// 내가 푼 풀이
function solution(numbers, target) {
  var answer = 0;
  function exc(level, sum) {
    if (level == numbers.length) { // 제일 마지막 연산까지 했을 때
      if (sum == target) { // 합계가 target 과 같다면
        answer++; // 정답 카운트 ++
      }
      return;
    }
    exc(level + 1, sum + numbers[level]); // 왼쪽 노드
    exc(level + 1, sum - numbers[level]); // 오른쪽 노드
  }
  exc(0, 0);
  return answer;
}








console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));


// 정답 풀이