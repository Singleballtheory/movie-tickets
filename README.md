
### done list
- we need to create a list of movies

price changes
  non-matinee: +3
  first release: +3
  age 55+: -4
  age 11-: -2

### todo
Webpage needs to house a list of movie titles

Data needed for movie
- name
- movie rating
  - G (any age)
  - PG 13 (at least 13)
  - R (at least 18)
- first release

Need to figure out stuff for ticket
- name of movie
- time of day
- person age
- price (based on age)
  - price is less for senior (55+)
  - price is less for children (11-)
- price (based on time)
  - price is less for showings before 2pm

- we need to get user input for tickets
  - all at same time?

- we need to find the movie from the ticket info

- check age
  - if age is too low for movie, tell them they can't watch
  - otherwise, show price based on input


```
Test: When we create a ticket with name, time, and age, we get a Ticket with that data
Code: new Ticket('Revenge', '12:00pm', 18)
Expected result: Ticket {name: "Revenge", time: "12:00pm", age: 18}
```

```
Test: Create an alternate ticket with different name, time, age to get a ticket with that data
Code: new Ticket("Race", "5:00pm", 34)
Expected result: Ticket {name: "Race", time: "5:00pm", age: 34}
```

```
Test: Return movie options based upon movie name
Code: movieResult('Revenge of the Harps')
Expected result: {name: "Revenge of the Harps", rating: "PG 13", firstRelease: true, times: ['5:00am', '5:00pm']}
```

```
Test: Return movie options based on other movie name
Code: movieResult('Kiss from a Fist')
Expected result: {name: 'Kiss from a Fist', rating: 'R', firstRelease: true, times: ['2:00pm', '8:00pm' ] }
```

```
Test: If somebody is over 18, they can see an R-rated movie
Code: canSeeMovie('R', 19)
Expected result: true
```

```
Test: If somebody is 17, they cannot see an R-rated movie
Code: canSeeMovie('R', 17)
Expected result: false
```

```
Test: Anyone can see a PG-13 movie
Code: canSeeMovie('PG 13', 7)
Expected result: true
```

```
Test: Anyone can see a G movie
Code: canSeeMovie('G', 3)
Expected result: true
```

```
Test: A 40-year old can be a PG-13 movie
Code: canSeeMovie('PG-13', 40)
Expected result: true
```

```
Test: Between the ages of 12 and 54, not firstRelease, and before 2pm, price is 5
const movie = { firstRelease: false }
const ticket = { age: 40, time: '10:00am' }
Code: getTicketPrice(movie, ticket)
Expected result: 5
```

```
Test: After 2pm, price is 8 (add 3 to price)
const movie = { firstRelease: false }
const ticket = { age: 40, time: '3:00pm' }
Code: getTicketPrice(movie, ticket)
Expected result: 8
```

```
Test: After 1pm, price is still 5
const movie = { firstRelease: false }
const ticket = { age: 40, time: '1:00pm' }
Code: getTicketPrice(movie, ticket)
Expected result: 5
```

```
Test: When it is a new release, price is 8 (add 3 to price)
const movie = { firstRelease: true }
const ticket = { age: 40, time: '10:00am' }
Code: getTicketPrice(movie, ticket)
Expected result: 8
```

```
Test: When it is a new release and not matinee, price is 11 (add 6 to price)
const movie = { firstRelease: true }
const ticket = { age: 40, time: '5:00pm' }
Code: getTicketPrice(movie, ticket)
Expected result: 11
```

```
Test: When buyer is 55, price is 7 (subtract 4 from price)
const movie = { firstRelease: true }
const ticket = { age: 55, time: '5:00pm' }
Code: getTicketPrice(movie, ticket)
Expected result: 7
```

```
Test: When buyer is 11, price is 9 (subtract 2 from price)
const movie = { firstRelease: true }
const ticket = { age: 11, time: '5:00pm' }
Code: getTicketPrice(movie, ticket)
Expected result: 9
```