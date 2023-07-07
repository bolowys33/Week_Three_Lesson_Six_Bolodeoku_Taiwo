const personNameAge = {
  name: 'Taiwo',
  age: 20
}

const personState = {
  state: 'Ondo'
}

const personGender = {
  gender: 'Male'
}

const personData = Object.assign({}, personNameAge, personGender, personState)
console.log(personData)

// logs => { name: 'Taiwo', age: 20, gender: 'Male', state: 'Ondo' }
