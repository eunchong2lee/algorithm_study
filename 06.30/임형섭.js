// 내가 푼 풀이
function solution(number, k) {
  let answer = "";
  let nums = (number + "").split("");
  for (let i = 0; i < nums.length - k; i++) {
    nums(i) + nums();
  }

  return answer;
}

// 정답 풀이
function solution(number, k) {
  const arr = [];
  for (let i = 0; i < number.length; i += 1) {
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      k -= 1;
      arr.pop();
    }
    arr.push(number[i]);
  }
  arr.splice(number.length - k, k);
  return arr.join("");
}
