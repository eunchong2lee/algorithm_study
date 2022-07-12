// 내가 푼 풀이

function solution(record) {
  const userInfo = [];
  const map = new Map();
  
  for (let i = 0; i < record.length; ++i) {
    const [state, uid, name] = record[i].split(' ');
    
    if (state == 'Leave') {
      userInfo.push([uid, '님이 나갔습니다.']);
      
      continue;
    }
    if (state == 'Enter') {
      userInfo.push([uid, '님이 들어왔습니다.']);
    }
    map.set(uid, name);
  }
  return userInfo.map(ele => map.get(ele[0]) + ele[1]);
}

// 정답 풀이
