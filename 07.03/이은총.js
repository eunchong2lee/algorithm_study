// 내가 푼 풀이
let brown = 8;
let yellow = 1;
function solution(brown, yellow) {
  var answer = [];
  let total = brown+yellow;
  let middle = [];
  for(let i = 1; i<=Math.sqrt(yellow); i++){
    // 가로가 세로보다 크기 때문에 제곱근의 이하만 for문으로 돌리면됨
    if(yellow%i==0){
      middle.push([yellow/i,i]);
    // 중간단계에 곱하면 yellow 값이 나오는 모든 값
    }
  }
  for(let j =0; j<middle.length; j++){
    if((middle[j][0]+2)*(middle[j][1]+2)==total){
      answer.push(middle[j][0]+2,middle[j][1]+2);
      // middle에 있는 가로 세로 길이를 각각 2를 더해서 곱한 값이 total 값이랑 같은지 비교
    }
  }
  console.log(answer);

  return answer;
}

solution(brown, yellow);



// 정답 풀이

function solution(brown, red) {
  var answer = [];
  for (var i = 3; i <= (brown+red)/i; i++) {
      var x = Math.floor((brown+red)/i);
      if( (x-2)*(i-2)=== red) {
          break;
      }
  }

  return [x,i];
}