// 내가 푼 풀이
let progresses = [99, 99, 99];
let speeds = 	[1, 1,1];
//[99, 99, 99] ,[1, 1,1]
function solution(progresses, speeds) {
  var answer = [];
  var result = [];

  if(answer.length ==0){
    answer.push([Math.ceil((100 - progresses[0])/speeds[0] )])
  }
  // 빈 배열인 answer에 처음 실행하는 값 배열로 넣기
    for(let i=1; i<progresses.length; i++) {

    if(answer[answer.length-1][0]>=Math.ceil((100 - progresses[i])/speeds[i] )){
      answer[answer.length-1].push(Math.ceil((100 - progresses[i])/speeds[i] ))
    }
    // 만약에 제일 마지막에 있는 배열의 첫번째 값이 실행 값보다 적거다 같을 경우 그 배열에 값을 넣는다.
    else {
      answer.push([Math.ceil((100 - progresses[i])/speeds[i] )])
    }
    // 만약에 제일 마지막에 있는 배열의 첫번째 값이 실행 값보다 크면 오바 되기 때문에 새로운 배열을 만들어준다.
  }

  for(let j =0; j < answer.length; j++) {
    result.push(answer[j].length);
  }
  // 같은 날에 몇개가 처리 되는지 확인하기 위한 length로 처리
  return result;
}

console.log(solution(progresses, speeds));









// 정답 풀이