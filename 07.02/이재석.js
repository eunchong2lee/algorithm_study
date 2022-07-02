// 내가 푼 풀이
function solution(priorities, location) {
  var answer = 0;
  return answer;
}





// 정답 풀이

function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, idx) => Math.ceil((100-progress)/speeds[idx]));
  let maxDay = days[0];
  
  for(let i=0, j=0; i<days.length; i++){
      if(days[i] <= maxDay){
          answer[j] += 1;
      }     
      else{
          answer[++j] = 1;
          maxDay = days[i];
      }
  }
  return answer;
}