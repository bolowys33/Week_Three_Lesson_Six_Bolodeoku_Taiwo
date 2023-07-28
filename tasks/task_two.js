const person = {
  name: 'Taiwo',
  age: 20,
  state: 'Ondo',
  gender: 'Male',
  city: 'Awka',
  religion: 'Christianity'
}

person.age = 21
person.city = 'Ibadan'

console.log(person)

// logs => {
//     name: 'Taiwo',
//     age: 21,
//     state: 'Ondo',
//     gender: 'Male',
//     city: 'Ibadan',
//     religion: 'Christianity'
//   }
