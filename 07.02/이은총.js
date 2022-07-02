// 내가 푼 풀이
let priorities = [1,1,9,1,1,1];
let location = 2;
function solution(priorities, location) {
  var answer = 0;
  let result = priorities.map( (a, i) =>{
    return [a, i]
  })
  var a= [];


  // while(true){
    for(let i =0; i< priorities.length; i++){
      a.push(result[0]);
      result.shift();
      for(let j = 0; j< result.length; j++){
        if(a[a.length-1][0]<result[j][0]){
          result.push(a[a.length-1]);
          a.pop();
          a.push(result[j]);
          result.splice(j,1);
        }
        console.log(result);
        console.log(a);
      }
      if( result.length ==0){
        break;
      }

  }
  console.log(result);
  console.log(a);
  return answer;
}
solution(priorities, location);









// 정답 풀이

function solution(priorities, location) {
    var list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    var count = 0;        
    while(true){
        var cur = list.splice(0,1)[0];        
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.my) return count;
        }
    }
}
