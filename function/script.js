function greet(){
  console.log('안녕 내 이름은 제시카야')
}



function greet(name){
  console.log('안녕 내 이름은',name,'야')
}




function greet(name){
  console.log('안녕 내 이름은',name,'야')
}

greet('석구')



function meetAt(year, month, date){
  if(date){
    return `${year}/${month}/${date}`;
  }
  if(month){
    return `${year}년${month}월`;
  }
  if(year){
    return `${year}년`;
  }
}

console.log(meetAt(2022))




function findSmallestElement(arr){
  let result = arr[0]
  if(arr.length === 0){
    return 0;
  }
  for(let i=0; i<arr.length; i++){
    if(result>arr[i]){
      result = arr[i];
    }
  }
  return result;
}

let numberarr = findSmallestElement([100,200,-3,7,2,1.4])
console.log(numberarr)



let unit = [50000,10000,5000,1000,500,100,50,10]

function change(money){
  if(isNaN(money)){
    console.log('잘못된 입력입니다');
  }else{
    for(let i=0; i<unit.length; i++){
      let num = Math.floor(money/unit[i])
      console.log(unit[i]+'X'+num)
      money = money-(unit[i]*num)
    }
  }  
}

change('150')