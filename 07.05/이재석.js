// 내가 푼 풀이
function solution(numbers) {
  var answer = '';
  return answer;
}











// 정답 풀이


function solution(numbers) {
  let answer = "";
  numbers.sort((a, b) => {
    return Number(String(b) + String(a)) - Number(String(a) + String(b));
  });
  numbers.forEach((elem) => {
    console.log(elem);
    answer += elem + "";
  });
 
  console.log(answer);
  
  if (answer[0] === "0") {
    return 0;
  }
  return 0;
}
