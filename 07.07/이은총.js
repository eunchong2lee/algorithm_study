// 내가 푼 풀이
function solution(s) {
  var answer = [];
  let result = s.split(' ').map((a,i)=> a.toLowerCase())
  // 전부다 소문자로 변경
  for(let i = 0; i< result.length; i++){
    let firstchar = result[i].charAt(0);
    // 제일 앞 글자를 빼옴
    let others = result[i].slice(1);
    // 제일 앞 글자 빼고 나머지 값
    answer.push(firstchar.toUpperCase() + others);
    // answer 배열 에다가 앞글자를 대문자로 변경 후 나머지 글자를 합친 것을 푸쉬함
  } 
  return answer.join(' ');
  // 조인 후 리턴
}

let s= "3people unFollowed me"
solution(s);

// 정답 풀이

function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}