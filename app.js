//aahh
let grid = document.querySelector(".gameGrid");
let pos = 50;
const mapSize = 100;

for(let i = 0; i < mapSize; i++){
  const cell = document.createElement('div');
  cell.className = "cell";
  cell.id = `cell${i}`;
  grid.appendChild(cell);
}

document.addEventListener("keydown", (event) => {
  let sneki = document.querySelector(`#cell${pos}`);

  switch(event.key){
    case 'w':
      pos -= 10;
      break;
    case 'a':
      pos -= 1;
      break;
    case 's':
      pos += 10;
      break;
    case 'd':
      pos += 1;
      break;
    default:
      break;
  }

  sneki = document.querySelector(`#cell${pos}`);
  sneki.style.visibility = "visible";
});
