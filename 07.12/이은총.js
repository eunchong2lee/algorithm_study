// 내가 푼 풀이
function solution(record) {
  var answer = [];
  let middle = record.map(x => x.split(' '))
  console.log(middle);
  return answer;
}
let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
solution(record);






// 정답 풀이

function solution(record) {
  var answer = [];
  const users = {}
  record.map(history => {
      const [action, id, name] = history.split(' ')
      if(action !== 'Leave') users[id] = name
  })
  record.map(history => {
      const [action, id, name] = history.split(' ')
      if(action === 'Enter') answer.push(`${users[id]}님이 들어왔습니다.`)
      if(action === 'Leave') answer.push(`${users[id]}님이 나갔습니다.`)
  })
  return answer;
}