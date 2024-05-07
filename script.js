let outer = document.querySelector(".outer");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let firstDice = document.querySelector(".firstDice");
let secondDice = document.querySelector(".secondDice");
let heading = document.querySelector("h1");

    let num1 = Math.floor(Math.random()*6+1);
    firstDice.setAttribute("src",  `dice${num1}.png`);

    let num2 = Math.floor(Math.random()*6+1);
    secondDice.setAttribute("src", `dice${num2}.png`);
    if(num1 > num2){
        heading.innerText = "🎉Player1 wins";
    } else if (num1 < num2){
        heading.innerText ="Player2 wins🎉" ;
    } else{
        heading.innerText ="Draw"
    }
    setTimeout(function(){
        heading.innerText = "Refresh Me";
    },1000);












