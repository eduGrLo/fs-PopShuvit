//aahh
let grid = document.querySelector(".gameGrid");
let pos = 55;
let posHist = [pos];	//historico de posicoes
let sneki = document.querySelector(`#cell${pos}`);
const mapSize = 100;
let count = 1;		//tamanho da cobrinha
let posApple; 		//posicao da maca
let apple;

for(let i = 0; i < mapSize; i++){
  const cell = document.createElement('div');
  cell.className = "cell";
  cell.id = `cell${i}`;
  grid.appendChild(cell);
}

function createApple(posHist){
  let pos = Math.trunc(Math.random() * 100);
  let ok = true;

  for(let i = 0; i < posHist.length; i++){
    if(pos === posHist[i]){ ok = false; }
  }

  if(!ok){ return createApple; }

  let apple = document.querySelector(`#cell${pos}`);
  apple.style.visibility = "visible";
  apple.style.backgroundColor = "#BBD5DA";


  return pos;
}

posApple = createApple(posHist);

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

  document.querySelector(`#cell${posApple}`).style.visibility = "visible";

  if(pos === posApple){
    sneki.style.backgroundColor = "#FF0000";
    count += 1;

    posApple = createApple(posHist);
  }

});
