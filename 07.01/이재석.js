// 내가 푼 풀이

// 정답 풀이


function solution(progresses, speeds) {
    let answer = [];
    let days = 0;
    let count = 0;
  
    while (progresses.length != 0) {
      if (progresses[0] + days * speeds[0] >= 100) {
        progresses.shift();
        speeds.shift();
        count += 1;
      } else {
        if (count != 0) {
          answer.push(count);
          count = 0;
        }
        days += 1;
      }
    }
    answer.push(count);
  
    return answer;
  }