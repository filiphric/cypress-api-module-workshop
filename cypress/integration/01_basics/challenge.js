/// <reference types="cypress" />

// #1: set up this test in a way that it resets the database before every test

// #2: create a new board using API. check that the "created" attribute is a string
it('date created is formatted as a string', () => {

});

// #3: make two api requests. make the first one create a board
// and make the second one check number of board in the database
it('GET /api/boards is returning correct number of boards', () => {

});

// #4: use a query parameter in GET /api/boards
// request, so that API will only return starred board 
it('filtering boards', () => {
  
});

// #5: create a new board and list. to create a new list, you’ll need
// to put it inside .then() command and use the id of the board in 
// the request
it('creating a new list', () => {
  
});