let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein"
]

let ABC = names.map((item)=>item.toUpperCase())
console.log(ABC)

let firstName = names.map((item)=>item.split(' ')[0])
console.log(firstName)

let initialName = names.map((item)=>{
  let splitName = item.split(' ')
  let initial = ""
  splitName.forEach((nameItem) => (initial += nameItem[0]))
  return initial;
})
console.log(initialName)




let aPerson = names.filter((item)=>item.includes("a"))
console.log(aPerson)

let sameLetter = names.filter((item)=>{
  let splitName = item.split('')
  return splitName.some((letter,index) => letter == splitName[index+1]);
})
console.log(sameLetter)



let nameLength = names.some((item) => item.length >= 20)
console.log(nameLength)

let pPerson = names.some((item) => {
    let splitName = item.split(" ")
    splitName.pop()
    return splitName.some(eachName=>eachName.toLocaleLowerCase().includes("p"))
})
console.log(pPerson)



console.log(names.every((item)=>item.length>=20))

console.log(names.every((item)=>item.includes("a")))




console.log(names.find((item)=>item.length>=20))

console.log(names.find((item)=>item.split(" ").length>=3))



console.log(names.findIndex((item)=>item.length>=20))

console.log(names.findIndex((item)=>item.split(" ").length>=3))