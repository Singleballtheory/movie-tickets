
### done list
- we need to create a list of movies

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
