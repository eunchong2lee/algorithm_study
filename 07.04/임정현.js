// 내가 푼 풀이
function solution(brown, yellow) {
  var answer = [];
  //카펫의 최소높이는 3(위아래 갈색, 가운데가 노란색이기 때문에)
  for (let height = 3; height <= brown; height++) {
    let sum = brown + yellow;
    //임의의 높이로 나눌때 나머지가 없을경우만
    if (sum % height === 0) {
      
      //가로길이
      let weight = sum / height;

      //테두리를 제외한 길이를 구해야하기 때문에 각각 -2해준뒤 곱셈
      //결과가 yellow와 같다면 해당 높이와 길이 리턴
      if ((height - 2) * (weight - 2) === yellow) {
        return [weight, height];
      }
    }
  }
  return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));





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
