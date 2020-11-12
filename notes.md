what HTML would be useful for the game board itself?
- Table to represent the grid
- Or for loops in JS to create grid
- Top row where the circles are dropped
- event listeners for each square
- start/restart button

how could you represent a played-piece in the HTML board?
- circle to represent each piece
- different colors
- add class to represent the color/player
- each grid has ID to represent its grid position
    - two numbers to represent coordinates (can pull these numbers in JS)
- initial background color of each grid's circle is white
- when piece played background color changes to the player's color

in the JavaScript, what would be a good structure for the in-memory game board?
- multi array representing the connect four grid
- each element initially has value null
- when piece is played, change the value in JS and then update the DOM

what might the flow of the game be?
- Player 1 picks a column
    - JS data structure updates
    - DOM updates
    - check for win or tie
- Player 2 picks a column
    - JS data structure updates
    - DOM updates
    - check for win or tie
- repeat until someone wins or tie


Possible Functions:
- makeBoard : creates JS data structure 
- displayBoard : paints connect four grid into DOM with eventListeners
- playerClicks : determine current player and change JS data structure
        - a way to check what was the last piece played in that column
        - if column is full, disable eventListener for that column
- updateBoard : change color for the played piece
- checkWin : checks for horizontal, vertical, upward diagonal, downward diagonal

