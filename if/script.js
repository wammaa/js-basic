let input = 2

if(input === 0){
  console.log('0입니다.')
}else if(input < 0){
  console.log('음수입니다.')
}else{
  console.log('양수입니다.')
}

let score = 72
let grade = ''

if(score >= 90){
  grade = 'A'
}else if(score >= 80){
  grade = 'B'
}else if(score >= 70){
  grade = 'C'
}else if(score >= 60){
  grade = 'D'
}else{
  grade = 'F'
}

console.log(grade)

let skills = ['HTML', 'CSS', 'React']

if(skills.includes('Javascript') && skills.includes('React')){
  console.log('합격')
}else if (skills.includes('Javascript') || skills.includes('React')){
  console.log('보류')
}else{
  console.log('불합')
}

let month = 888

switch(month){
  case 1: case 2: case 3:
    console.log('1분기 입니다.')
    break;
  case 4: case 5: case 6:
    console.log('2분기 입니다.')
    break;
  case 7: case 8: case 9:
    console.log('3분기 입니다.')
    break;
  case 10: case 11: case 12:
    console.log('4분기 입니다.')
    break;
  default:
    console.log('잘못된 입력입니다')
}

let ramen = 123

console.log(
  '오늘은 라멘을 ' +
  (ramen > 0 ? '먹었습니다':'먹지 않았습니다')
)