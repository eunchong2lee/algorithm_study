// 내가 푼 풀이
function solution(files) {
  var answer = [];
  return answer;
}

let a =['a','A','b','B','c','C']

console.log(a.sort())









// 정답 풀이

function solution(files) {
  let answerWrap = files.map((file, index) => ({file, index}));
  const compare = (a, b) => {
    const reg = /(\D*)([0-9]*)/i;
    const A = a.match(reg);
    const B = b.match(reg);
    const compareHead = A[1].toLowerCase().localeCompare(B[1].toLowerCase());
    const compareNumber = (a, b) => {
       return parseInt(a) > parseInt(b) ? 
          1 : parseInt(a) < parseInt(b) ? 
           -1 
          : 0
    }
    return compareHead === 0 ? compareNumber(A[2], B[2]) : compareHead
  }
  answerWrap.sort((a, b) => {
    const result = compare(a.file, b.file);
    return result === 0 ? a.index - b.index : result;
  })
  return answerWrap.map(answer => answer.file);
}