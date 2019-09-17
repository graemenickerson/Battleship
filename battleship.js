//Graeme Nickerson
//September 19, 2019

let playerShips = {carrier : { shipLength : 5, shipBow : [], shipStern : [], numOfHits : 0},
              battleship : {shipLength : 4, shipBow : [], shipStern : [], numOfHits : 0},
              cruiser : {shipLength : 3, shipBow : [], shipStern : [], numOfHits : 0},
              submarine : {shipLength : 3, shipBow : [], shipStern : [], numOfHits : 0},
              destroyer : {shipLength : 2, shipBow : [], shipStern : [], numOfHits : 0}};

let aiShips = {carrier : { shipLength : 5, shipBow : [], shipStern : [], numOfHits : 0},
            battleship : {shipLength : 4, shipBow : [], shipStern : [], numOfHits : 0},
            cruiser : {shipLength : 3, shipBow : [], shipStern : [], numOfHits : 0},
            submarine : {shipLength : 3, shipBow : [], shipStern : [], numOfHits : 0},
            destroyer : {shipLength : 2, shipBow : [], shipStern : [], numOfHits : 0}};

const buildNewBoard = function() {
  let outputBoard = [[], [], [], [], [], [], [], [], [], []];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      outputBoard[i].push(0);
    }
  }
  return outputBoard;
};

let playerBoard = buildNewBoard();
let aiBoard = buildNewBoard();


// TEST PARAMS
console.log(board);