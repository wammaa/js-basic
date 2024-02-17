

let name = "noona`s fruit store"
let fruits = ["banana", "apple", "mango"]
let address = "Seoul"

// let store = {name:name, fruits:fruits, address:address}
let store = {name, fruits, address}

console.log(store)
console.log(`제 가게 이름은 ${name}입니다. 위치는 ${address}에 있습니다.`)




function calculate(obj){
  let {a,b,c} = obj
  return a+b+c
}

console.log(calculate({a:1, b:2, c:3}))




let name = "noona store";
let fruits = ["banana", "apple", "mango"];
let address = {
  country: "KOREA",
  city: "SEOUL",
};

function findStore(obj) {
  let {name, address:{city}} = obj
  return name = "noona store" && city == "SEOUL"
}

console.log(findStore({name, fruits, address}))



function getNumber(){
  let array = [1,2,3,4,5,6]
  let [first,, third, forth] = array
  return {first, third, forth}
}
console.log(getNumber())




function getCalender(first, ...rest){
  return(
    first === "January" &&
    rest[0] === "Feburary" &&
    rest [1] === "March" &&
    rest [2] === undefined
  )
}

console.log(getCalender("January", "Feburary", "March"))




function getMinimum(){
  let a = [45, 23, 78]
  let b = [54, 11, 9]
  return Math.min(...a, ...b)
}

console.log(getMinimum())



function sumNumber(){
  const sum = (a,b) => a+b;
  return sum(40,10);
}

console.log(sumNumber())



function sumNumber(){
  let addNumber = (a) => (b) => (c) => a+b+c;
  return addNumber(1)(2)(3);
  // function addNumber(a){
  //   return function(b){
  //     return function(c){
  //       return a+b+c;
  //     }
  //   }
  // }
}

console.log(sumNumber())