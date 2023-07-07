const person = {
  name: 'Taiwo',
  age: 20,
  state: 'Ondo',
  gender: 'Male',
  city: 'Awka',
  religion: 'Christianity'
}

for (const key in person) {
  console.log(`${key} : ${person[key]}`)
}

// logs => name : Taiwo
//         age : 20
//         state : Ondo
//         gender : Male
//         city : Awka
//         religion : Christianity
