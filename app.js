//aahh
let grid = document.querySelector(".gameGrid");
let pos = 55;
let posHist = [pos];	//historico de posicoes
let sneki = document.querySelector(`#cell${pos}`);
const mapSize = 100;
let count = 2;

for(let i = 0; i < mapSize; i++){
  const cell = document.createElement('div');
  cell.className = "cell";
  cell.id = `cell${i}`;
  grid.appendChild(cell);
}

document.addEventListener("keydown", (event) => {
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

  posHist.push(pos);
  if(posHist.length > count){
    posHist.shift();
  }

  let cell = document.querySelectorAll(".cell");
  cell.forEach((e) => {
    e.style.visibility = "hidden";    //resetzin
  });

  for(let i = 0; i < count; i++){
    sneki = document.querySelector(`#cell${posHist[i]}`);
    sneki.style.visibility = "visible";
  }

});
