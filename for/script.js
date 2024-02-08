for(let i = 0, j = 0; i <=100; i++){
  console.log(j+=i)
}

let z = 1
let sum = 0

while(z<=100){
  sum += z
  z++
  console.log(sum)
}

for(let a = 0; a <=100; a++){
  if(a % 2 !== 0){
    console.log(a)
  }
}

let x = 1

while(x<=100){
  console.log(x%2===0?'':x )
  x++
}

for(let b = 1; b<=50; b++){
  let stringValue = b.toString()
  let result = ''
  for(let c = 0; stringValue.length>c; c++){
    if(stringValue[c] === '3' || stringValue[c] === '6' || stringValue[c] === '9'){
      result += '짝'
    }
  }
  console.log(result.length>0? result : b)
}

let n = 17
let isPrime = 'True'

if(n === 1){
  isPrime = 'False'
}else{
  for(d = 2; d<n; d++){
    if(n % d === 0){
      isPrime = 'False'
    }
  }
}
console.log(isPrime)

let m = 14
let result1 = 'true'

for(k = 2; k<m; k++){
  if(m%k === 0 || m === 1){
    result1 = 'False'
  }
}
console.log(result1)



