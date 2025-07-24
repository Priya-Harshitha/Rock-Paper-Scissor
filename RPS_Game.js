const game = ['rock','paper','scissor'];
let player = document.getElementById('player');
let computer= document.getElementById('computer');
let result = document.getElementById('result');

let ps = 0;
let cs = 0;
let psd = document.getElementById('psd');
let csd = document.getElementById('csd');

function play(p){
   let c = game[Math.floor(Math.random()*3)];
   player.textContent = `Player: ${p}`;
   computer.textContent = `Computer: ${c}`;
   if(p === c){
    result.classList.remove('green','red');
    result.textContent = "It's a TIE!";
   }
   else{
    let r;
    switch(p){
    case "rock":
        r = c === "scissor"?"You WIN!":"You LOSE!";
        result.textContent = r;
        break;
    case "paper":
        r = c === "rock"?"You WIN!":"You LOSE!";
        result.textContent = r;
        break;
    case "scissor":
        r = c === "paper"?"You WIN!":"You LOSE!";
        result.textContent = r;
        break;
   }
   if(r=="You WIN!"){
    ps++;
      result.classList.add('green');
      psd.textContent = ps;
   }
   else if(r=="You LOSE!"){
    cs++;
     result.classList.add('red');
     csd.textContent = cs;
   }
   }
}