// 내가 푼 풀이
function solution(priorities, location) {
  let answer = 0;
  for (let i = 0; i < priorities.length; i++) {
    if (priorities[i] >= priorities[i + 1]) {
    }
  }
  return answer;
}

// 정답 풀이

function solution(priorities, location) {
  let max;
  let cnt = 0;

  while (true) {
    max = Math.max.apply(null, priorities);
    let n = priorities.shift(); //맨 앞의 요소를 빼낸다

    if (n === max) {
      //꺼낸 요소가 max와 같으면
      cnt++; //pop하므로 cnt 1증가
      if (location === 0) {
        //만약 location이 0이되면
        return cnt; //cnt를 return
      }
    } else {
      //꺼낸 요소가 max와 다르면
      priorities.push(n); //배열 맨 끝에 꺼낸 요소를 추가
    }
    location--; //한 차례마다 location값을 계속 줄여나간다

    if (location == -1) {
      //만약 -1이 되어버리면 다시 배열의 맨끝으로 보낸다
      location = priorities.length - 1;
    }
  }
}

// 다른 풀이
function solution(priorities, location) {
  let max;
  let cnt = 0;
  let i = priorities.indexOf(max);

  while (true) {
    max = Math.max.apply(null, priorities); //max값을 계속 구함
    i = i % priorities.length; //인덱스는 0 ~ (priorities의 길이-1) 만큼

    if (priorities[i] === max) {
      //현재 요소가 max값과 같으면
      cnt++; //pop의 의미로 cnt를 1증가시킴
      priorities[i] = -1; //max값을 -1로 만들어버림

      if (i === location) {
        //만약 인덱스가 location과 같다면
        return ++cnt; //pop후 return 하므로 ++cnt를 return 해준다.
      }
    }
    i++; // 현재 요소가 max값과 다르면 인덱스를 1증가시킨다.
  }
}
