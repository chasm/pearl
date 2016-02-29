var R = require('ramda')

// These are the words for the word search square
var colors = [
  'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
]

// This returns the total number of characters in all the words combined
var totalChars = function (list) {
  return list.join('').length
}

// This gets the next largest square's *side* that will fit all the characters
var getBoardLength = function (side, chars) {
  if (side * side > chars) {
    return side * side
  }

  return getBoardLength(side + 1, chars)
}

// Get the length of the board array
var length = getBoardLength(5, totalChars(colors))

// Create an array of the right length with empty strings in each cell
var board = new Array(length).fill('')

// Get a random empty starting square for a word
var getRandomSquare = function (board) {
  var len = board.length;
  var square = Math.floor(Math.random() * len)

  if (!board[square]) {
    return square
  }

  return getRandomSquare(board)
}

// Get direction

console.log(getRandomSquare(['C', '', 'A', '']))

