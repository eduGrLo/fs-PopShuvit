//aahh
let grid = document.querySelector(".gameGrid");
const mapSize = 100;

for(let i = 0; i < mapSize; i++){
  const cell = document.createElement('div');
  cell.className = "cell";
  cell.id = `cell${i}`;
  grid.appendChild(cell);
}
