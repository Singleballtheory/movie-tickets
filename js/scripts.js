
function Ticket (name, time, age) {
  this.name = name
  this.time = time
  this.age = age
}

const movies = [
  {
    name: 'Revenge of the Harps',
    rating: 'PG 13',
    firstRelease: true,
    times: [
      '5:00am',
      '5:00pm',
    ],
  },
  {
    name: 'Jerry\'s Strange Predicament',
    rating: 'R',
    firstRelease: false,
    times: [
      '3:00am',
      '6:00pm',
    ],
  },
  {
    name: 'Angelo the Jello Bear',
    rating: 'G',
    firstRelease: false,
    times: [
      '1:00pm',
    ],
  },
  {
    name: 'Kiss from a Fist',
    rating: 'R',
    firstRelease: true,
    times: [
      '2:00pm',
      '8:00pm',
    ],
  },
  {
    name: 'Race to Her Heart',
    rating: 'PG 13',
    firstRelease: true,
    times: [
      '4:00am',
      '9:00am',
    ],
  },
]

function movieResult (movieName) {  
  for (let i = 0; i < movies.length; i++) {
    const name = movies[i].name

    if (name === movieName) {
      return movies[i]
    }
  }
}

function canSeeMovie (rating, age) {
  return age >= 18 || rating !== 'R'
}

function getTicketPrice (movie, ticket) {
  let defaultPrice = 5

  let time = ticket.time

  let colonIndex = time.indexOf(':')
  let hours = time.slice(0, colonIndex)

  if (hours >= 2 && time.endsWith('pm')) {
    defaultPrice += 3
  }

  return defaultPrice
}

function runTests () {
  console.log('When we create a ticket with name, time, and age, we get a Ticket with that data')
  console.log(new Ticket('Revenge', '12:00pm', 18))
  console.log('Expected:', {name: "Revenge", time: "12:00pm", age: 18})

  console.log('Create an alternate ticket with different name, time, age to get a ticket with that data')
  console.log(new Ticket("Race", "5:00pm", 34))
  console.log('Expected:', {name: "Race", time: "5:00pm", age: 34})

  console.log('Return movie options based upon movie name')
  console.log(movieResult('Revenge of the Harps'))
  console.log('Expected:', {name: "Revenge of the Harps", rating: "PG 13", firstRelease: true, times: ['5:00am', '5:00pm']})

  console.log('Return movie options based on other movie name')
  console.log(movieResult('Kiss from a Fist'))
  console.log('Expected:', {name: 'Kiss from a Fist', rating: 'R', firstRelease: true, times: ['2:00pm', '8:00pm' ] })

  console.log('If somebody is over 18, they can see an R-rated movie')
  console.log(canSeeMovie('R', 19))
  console.log('Expected:', true)

  console.log('If somebody is over 17, they cannot see an R-rated movie')
  console.log(canSeeMovie('R', 17))
  console.log('Expected:', false)

  console.log('Anyone can see a PG-13 movie')
  console.log(canSeeMovie('PG 13', 7))
  console.log('Expected:', true)

  console.log('Anyone can see a G movie')
  console.log(canSeeMovie('G', 3))
  console.log('Expected:', true)

  console.log('A 40-year old can be a PG-13 movie')
  console.log(canSeeMovie('PG 13', 40))
  console.log('Expected:', true)

  console.log('Between the ages of 12 and 54, not firstRelease, and before 2pm, price is 5')
  console.log(getTicketPrice({ firstRelease: false }, { age: 40, time: '10:00am' }))
  console.log('Expected:', 5)

  console.log('After 2pm, price is 8 (add 3 to price)')
  console.log(getTicketPrice({ firstRelease: false }, { age: 40, time: '3:00pm' }))
  console.log('Expected:', 8)

  console.log('After 1pm, price is still 5')
  console.log(getTicketPrice({ firstRelease: false }, { age: 40, time: '1:00pm' }))
  console.log('Expected:', 5)
}

runTests()