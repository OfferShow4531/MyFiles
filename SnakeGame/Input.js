let inputDirection = { x:0 , y:0}
let LastInputDirection = {x:0,y:0}
export function getInputDirection(){
  LastInputDirection = inputDirection
  return inputDirection;
}
window.addEventListener('keydown', e=>{
  switch (e.key){
    case 'ArrowUp':
      if(LastInputDirection.x!==0) break
      inputDirection = {x:-1, y:0}
      break
    case 'ArrowDown':
      if(LastInputDirection.x!==0) break
      inputDirection = {x:1, y:0}
      break
    case 'ArrowLeft':
      if(LastInputDirection.y!==0) break
      inputDirection = {x:0, y:-1}
      break
    case 'ArrowRight':
      if(LastInputDirection.y!==0) break
      inputDirection = {x:0, y:1}
      break
  }
})
