// test findSpotForCol

it ("should return the row that the piece can be placed on",function(){ 
  board= [[null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,1,null,null,null,null]];
  expect(findSpotForCol(0)).toEqual(5);
  expect(findSpotForCol(1)).toEqual(4);
});


it ("should return null if the column is full",function(){ 
  board= [[1,null,null,null,null,null],
        [2,null,null,null,null,null],
        [1,null,null,null,null,null],
        [1,null,null,null,null,null],
        [1,null,null,null,null,null],
        [2,1,null,null,null,null]];
  expect(findSpotForCol(0)).toEqual(null);
});

// test checkForWin 
it ("should return true if it's a vertical win",function(){ 
  board= [[null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [1,null,null,null,null,null],
        [1,null,null,null,null,null],
        [1,null,null,null,null,null],
        [1,2,null,null,null,null]];
  expect(checkForWin()).toEqual(true);
});


it ("should return true if it's a horizontal win",function(){ 
  board= [[null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [2,null,null,null,null,null],
        [1,null,null,null,null,null],
        [1,null,null,null,null,null],
        [1,1,1,1,null,null]];
  expect(checkForWin()).toEqual(true);
});

it ("should return true if it's a DL win",function(){ 
  board= [[null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [2,null,null,1,null,null],
        [1,null,1,null,null,null],
        [1,1,null,null,null,null],
        [1,2,null,null,null,null]];
  expect(checkForWin()).toEqual(true);
});

it ("should return true if it's a DR win",function(){ 
  board= [[null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [1,null,null,null,null,null],
        [2,1,null,null,null,null],
        [1,null,1,null,null,null],
        [1,2,null,1,null,null]];
  expect(checkForWin()).toEqual(true);
});

it ("should return undefined if there is no win",function(){ 
  board= [[null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [1,null,null,null,null,null],
        [2,2,null,null,null,null],
        [1,null,1,null,null,null],
        [1,2,null,1,null,null]];
  expect(checkForWin()).toEqual(undefined);
});
// test placeintable 
it ("the cell should be in the right place and be the right color",function(){
  currPlayer=1;
  placeInTable(0,4);
  let expectedPiece= document.getElementById('0-4').firstChild;
  expect(expectedPiece.classList.contains('p1')).toEqual(true);
});

// test clickhandler


