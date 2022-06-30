// 내가 푼 풀이
function solution(number, k) {
  var answer = '';
  return answer;
}








// 정답 풀이

function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const item of number) {
    // 스택의 마지막 요소가 item보다 작다면 스택의 마지막 요소를 지워줌
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count += 1;
    }
    stack.push(item);
  }

  // count가 k까지 도달하지 못하는 경우 예)"9876543"
  while (count < k) {
    stack.pop();
    count += 1;
  }

  return stack.join("");
}