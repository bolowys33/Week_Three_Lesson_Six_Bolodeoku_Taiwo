const person = {
  name: 'Taiwo',
  age: 20,
  state: 'Ondo',
  gender: 'Male',
  city: 'Awka',
  religion: 'Christianity'
}

delete person.religion
delete person.gender

console.log(person)

// logs => { name: 'Taiwo', age: 20, state: 'Ondo', city: 'Awka' }
