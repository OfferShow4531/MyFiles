import {onSnake, expandSnake} from "./Snake.js"
import { randomGridPosition } from './grid.js'
let food = getRandomPosition()
const Expansion_rate = 1

export function draw(gameBoard){
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.x;
  foodElement.style.gridColumnStart = food.y;
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement);
}
export function update() {
  if(onSnake(food)){
    expandSnake(Expansion_rate)
    food = getRandomPosition()
  }
}
function getRandomPosition(){
  let newFoodPosition
  while(newFoodPosition == null || onSnake(newFoodPosition)){
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition
}

