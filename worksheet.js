const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map(character => character.name)
console.log(allNames)

//2. Get array of all heights
const allHeights = characters.map(character => character.height)
console.log(allHeights)
//3. Get array of objects with just name and height properties
const allNamesAndHeights = characters.map(character => ({name: character.name, height: character.height}))
console.log(allNamesAndHeights)
//4. Get array of all first names
const allFirstNames = characters.map(character => character.name.split(" ")[0])
console.log(allFirstNames)

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((mass, character) => {
    return mass + character.mass
}, 0)
console.log(totalMass)
//2. Get total height of all characters
const totalHeight = characters.reduce((height, character) => {
    return height + character.height
}, 0)
console.log(totalHeight)
//3. Get total number of characters by eye color
const charactersByEyeColour = characters.reduce((eye_color, character) => {
    if(eye_color[character.eye_color]){
        eye_color[character.eye_color]++  
    }
    else{
        eye_color[character.eye_color] = 1 
    }
    return eye_color
}, {})
console.log(charactersByEyeColour)
//4. Get total number of characters in all the character names
const totalNameCharacters = characters.reduce((characterNameLength, character) => characterNameLength + character.name.length, 0)
console.log(totalNameCharacters)
//***FILTER***
//1. Get characters with mass greater than 100
const charactersMass100plus = characters.filter(character => {
    return character.mass > 100
})
console.log(charactersMass100plus)
//2. Get characters with height less than 200
const charactersHeightlessThan200 = characters.filter(character => {
    return character.height < 200
})
console.log(charactersHeightlessThan200)

const charactersHeightlessThan2001 = characters.filter(character =>  character.height < 200
)
console.log(charactersHeightlessThan2001)
//3. Get all male characters
const maleCharacters = characters.filter(character => {
    return character.gender == "male"
})
console.log(maleCharacters)
//4. Get all female characters
const femaleCharacters = characters.filter(character => {
    return character.gender == "female"
})
console.log(femaleCharacters)

//***SORT***
//1. Sort by mass
const sortByMass = characters.sort((a, b) => a.mass - b.mass)
console.log(sortByMass)

const sortByMassDesc = characters.sort((a, b) => b.mass - a.mass)
console.log(sortByMassDesc)
//2. Sort by height
const sortByHeight = characters.sort((a, b) => a.height - b.height)
console.log(sortByHeight)
//3. Sort by name
const sortByName = characters.sort((a, b) => {
    if(a.name < b.name) return -1
    return 1;
})
console.log(sortByName)
//4. Sort by gender

const sortByGender = characters.sort((a, b) => {
    if(a.gender == "female") return -1
    return 1;
})
console.log(sortByGender)

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?


const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 20 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 },
    { name: 'Bill', age: 19 }
  ];
  
  // your code...
  const ofDrinkingAge = people.filter(person => {
    return person.age >= 21
})
  
  console.log(ofDrinkingAge);
  // [
  //   { name: 'Candice', age: 25 },
  //   { name: 'Tammy', age: 30 },
  //   { name: 'Nettie', age: 21 }
  // ]
  
  const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
  ];

  const poolProperties = places.filter(property => property.pool == true)
  
  console.log(poolProperties)

  const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

// your code...
const result = numbers.filter(number => number > 42 && number % 2 != 0)

console.log(result);
// [ 123, 99, 73, 45 ]
