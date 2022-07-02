// 내가 푼 풀이
function solution(priorities, location) {
  var answer = 0;

  while(true) {
        let max = Math.max.apply(null, priorities);
        let n = priorities.shift();
        console.log ("나는 최대값",max)
        console.log("나는 n",n)

        if(n === max) {
            answer++;
            if (location === 0) {
                return answer;
            }
        } else {
            priorities.push(n);
        }
        location--;
        if (location === -1) {
            location = priorities.length -1;
        }
  }
}


console.log(solution([2, 1, 3, 2], 2));
// console.log(solution([1, 1, 9, 1, 1, 1], 0));


// 정답 풀이
// return 1
// return 5