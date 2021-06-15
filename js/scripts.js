
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
}

runTests()