const arr = [1,2,3,4,5];

function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

const double2 = arr.map(val => val * 2);

////////////////////////////////////////////

const numbers = [1,2,3,4,5];

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

const squareAndFindEvens2 = numbers.map(num => num ** 2).filter(square => square % 2 === 0);