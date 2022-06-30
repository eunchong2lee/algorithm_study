// 내가 푼 풀이
let number = 1924
let k= 2
function solution(number, k) {
  var answer = '';
  number= number+ ''
  let result = number.split('')

  for(let i = 0;i <k; i++) {
    result.splice(result.indexOf(Math.min.apply(null, result)+''), 1)
    console.log(result);
  }
  return answer = result.join('');
}
solution(number, k);


// console.log(number.split(''))


// 정답 풀이

function solution(number, k) {
  let numStr = String(number);
  let numLength = numStr.length;
  let stack = [];
  let count = 0;

  for (let i = 0; i < numLength; i++) {
      let current = numStr[i];
      if(!stack.length){
         stack.push(current);
         continue;
      }

      //stack의 쌓인 최근 값이 들어와야할 값보다 크거나 같을떄까지 꺼낸다..
      while (stack[stack.length - 1] < current) {
          stack.pop();
          count++; // 뺀자리 카운트
          // 인자값 대로 다 뺐다면 남은 숫자 다 꺼냄
          if (count === k) {
              return stack.join('') + numStr.substring(i, numLength);
          }

          if (stack.length === 0 ) {
              break;
          }

      }
      stack.push(current);
  }

  return stack.join('').substring(0, numLength - k);
}