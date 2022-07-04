// 내가 푼 풀이
function solution(brown, yellow) {
  let answer = [];
  // 카펫의 세로 길이는 3 이상
  for (let i = 3; i <= (brown+yellow)/i; i++) {
    let x = Math.floor((brown+yellow)/i);
    if( (x-2)*(i-2)=== yellow) {
      break;
      }
  }
  return [x,i];
}

// 정답 풀이
