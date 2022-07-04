// 내가 푼 풀이, 테스트 4,6,7에서 실패
function solution(brown, yellow) {
  let answer = [];
  let sum = brown + yellow
  let measure = []
  let index = 1
  
  while (sum >= index) {
      if (sum % index == 0) {
          measure.push(index)
      }
      index += 1
  }
  if(measure.length % 2 === 0){
      answer.push(measure[measure.length/2],measure[measure.length/2-1])
  }
      else {
          answer.push(measure[Math.floor(measure.length/2)],measure[Math.floor(measure.length/2)])
      }
  
  
  return answer;
}


// 정답 풀이

function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;
  
  //카펫의 최소높이는 3부터이다.(위아래 갈색, 가운데가 노란색이기 때문에)
  for(let height=3; height<=brown; height++){
      //임의의 높이로 나눌때 나머지가 없을경우만
      if(sum % height === 0){
          //가로길이
          let weight = sum / height;
          
          //테두리를 제외한 길이를 구해야하기 때문에 각각 -2해준뒤 곱셈
          //결과가 yellow와 같다면 해당 높이와 길이 리턴
          if( (height-2) * (weight-2) === yellow){
              return [weight, height];
          }
      }
  }
  return answer;
}
출처: https://ghost4551.tistory.com/115 [프론트 개발자들을 위한 티스토리:티스토리]