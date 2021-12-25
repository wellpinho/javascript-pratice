// retornar objeto com total de nomes que começam com determinada letra.
const names = ['Daniel', 'Maria', 'Joana', 'João'];

const filterNamesByLetterReturnTotqal = names.reduce((accumulator, current) => {
  let firstLetter = current[0]; // pega do primeiro nome a letra "D"

  if (accumulator[firstLetter]) {
    accumulator[firstLetter] += 1
  } else {
    accumulator[firstLetter] = 1
  }

  return accumulator
}, {})

console.log(filterNamesByLetterReturnTotqal) // { D: 1, M: 1, J: 2 }