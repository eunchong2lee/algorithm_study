// 내가 푼 풀이
// let N = require('fs').readFileSync('/dev/stdin');
// let fs = require('fs');
// let number = fs.readFileSync('/dev/stdin').toString().split(' ');
let number= ['1','10','13','100','1000','10000','1000000','0']
let result = 0;
let newnumber = [];
for(let i=0; i<number.length; i++){
  for(let j=number[i]; j<number[i]*2; j++) {
    let count =0;
    for(let k=1; k<j; k++ ){
      if(j%k==0){
        count ++;
      }
    }
    if(count ==1){
      result ++;
    }
  }
  if(number[i] != 0){
    newnumber.push(result);
  }

}

console.log(newnumber.join('\n'));






// 정답 풀이


let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
inputs.pop();

for (let i = 0; i < inputs.length; i++) {
    let input = Number(inputs[i]);

    let input2 = input * 2;

    let isPrimeNumber = Array(input2 + 1).fill(true);
    isPrimeNumber[0] = isPrimeNumber[1] = false;

    function PrimeNumber() {
        for(let i = 2; i <= Math.ceil(Math.sqrt(input2)); i++) {
            if(isPrimeNumber[i]) {
                let m = 2;
                while(i * m <= input2) {
                    isPrimeNumber[i * m] = false;
                    m++;
                }
            }
        } 
        let results = [];
    
        for(let i = input + 1; i <= input2; i++) {
            if(isPrimeNumber[i]) {
                results.push(i);
            }
        }
        console.log(results.length);
    
    }
    
    PrimeNumber();
}