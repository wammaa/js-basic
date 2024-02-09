let animals= [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur", 
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Grasshopper",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Moose",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum", 
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit", 
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Sandpiper",
  "Sardine",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Tiger",
  "Toad",
  "Whale",
  "Wildcat",
  "Wolf",
  "Worm",
  "Wren",
  "Yak",
  "Zebra"
]

animals.pop('zebra')

animals.push('Dog')

animals.push('Mosquito','Mouse','Mule')

console.log(animals.includes('Human'))

console.log(animals.includes('Cat'))

// *굳이 일일히 인덱스를 찾아서 하지 않고 이런식으로 가능*

// console.log(animals.indexOf('Red deer'))

// animals[77] = 'Deer'
animals[animals.indexOf("Red deer")] = "Deer"

// console.log(animals.indexOf('Spider'))

// animals.splice(81, 3)
animals.splice(animals.indexOf("Spider"),3)

// console.log(animals.indexOf('Tiger'))

// animals.splice(85)
animals.splice(animals.indexOf("Tiger"))

// console.log(animals.indexOf('Baboon'))

// console.log(animals.indexOf('Bison'))

// let banimals = animals.slice(8, 16)
let banimals = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)

console.log(animals)

console.log(banimals)