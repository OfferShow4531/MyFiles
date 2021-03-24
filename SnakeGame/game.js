import { update as updateSnake, draw as drawSnake, Snake_speed, getSnakeHead, snakeIntersection } from './Snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js';

const gameBoard = document.getElementById('game-board');
let LastRenderTime = 0;
let gameOver = false

function main(currentTime){
  if(gameOver){
    if(confirm('Snake death! Press ok for start again!')){
      window.location.reload()
    }
    return
  }



  const secondSinceLastRender = (currentTime - LastRenderTime) / 1000
  window.requestAnimationFrame(main)
  if( secondSinceLastRender < 1 / Snake_speed )
    return
  console.log('Render')
  LastRenderTime = currentTime
  console.log(currentTime)
  update()
  draw()
}
window.requestAnimationFrame(main);

function update(){
  updateSnake()
  updateFood()
  checkDeath()
}
function draw(){
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath(){
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
