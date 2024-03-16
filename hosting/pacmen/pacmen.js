const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
const pacMen = []; // This array holds all the pacmen

var game;
var gameRect;
window.onload = ()=>{
  game = document.getElementById('game');
  gameRect = game.getBoundingClientRect();
}

function setToRandom(minX, maxX, minY, maxY) {
    return {
        x: Math.random() * (maxX - minX) + minX ,
        y: Math.random() * (maxY - minY) + minY
    }
}

// Factory to make a PacMan at a random position with random velocity
function makeMan() {
    // returns an object with random values scaled {x: 33, y: 21}
    let velocity = setToRandom(1, 10, 1, 10); // {x:?, y:?}
    let position = setToRandom(gameRect.left + 10, gameRect.right - 110, gameRect.top + 10, gameRect.bottom - 110);
    let direction = [0, 0, 0];
    // Add image to div id = game
    let newImg = document.createElement('img');
    newImg.style.position = 'absolute';
    newImg.src = './images/PacMan1.png';
    newImg.width = 100;
    newImg.style.left = `${position.x}px`;
    newImg.style.top = `${position.y}px`;
    game.appendChild(newImg);
    // return details in an object
    return {
        position,
        velocity,
        direction,
        newImg
    }
}

function update() {
  //loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
      checkCollisions(item)
      item.position.x += item.velocity.x;
      item.position.y += item.velocity.y;

      item.newImg.style.left = `${item.position.x}px`;
      item.newImg.style.top = `${item.position.y}px`;
      
      item.direction[2] = item.direction[2] + 1;
      
      if(item.direction[2] % 4 == 0){
        item.direction[1] = item.direction[1] == 0 ? 1 : 0;
        item.newImg.src = `./images/${pacArray[item.direction[0]][item.direction[1]]}`;
      }
  })
  setTimeout(update, 20);
}
function checkCollisions(item) {
    if(item.position.x + item.velocity.x + item.newImg.width > gameRect.right|| item.position.x + item.velocity.x < gameRect.left){
      item.velocity.x = -item.velocity.x;
      item.direction[0] = item.direction[0] == 1 ? 0 : 1;
    }
    if(item.position.y+ item.velocity.y + item.newImg.height > gameRect.bottom|| item.position.y + item.velocity.y < gameRect.top){
      item.velocity.y = -item.velocity.y;
    }
}

function makeOne() {
    pacMen.push(makeMan()); // add a new PacMan
}