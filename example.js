//'use strict';




function rollDice(){
  let randomNo1= Math.trunc(Math.random() * 6)+1;
  let randomNo2=Math.trunc(Math.random() * 6)+1;
  let dice1=document.querySelector(".img1");
  let dice2=document.querySelector(".img2");
  dice1.setAttribute('src',`images/dice${randomNo1}.png`);
  dice2.setAttribute('src',`images/dice${randomNo2}.png`);

  

    if (randomNo1 === randomNo2){
      document.querySelector('h1').innerHTML=" Draw 🤐";
    }else if (randomNo1 > randomNo2) {
      document.querySelector('h1').innerHTML='Player 1' +' Wins 😍';
    }else{
        document.querySelector('h1').innerHTML='Player 2' +' Wins 😎';
    }
  };

// let randomNo= Math.trunc(Math.random() * 6)+1;
//
// let rollDice=`dice${randomNo}.png`;
// let image1=document.querySelectorAll("img")


// function rollDice(num){
//   if (num >=1 && num <=6){
//     document.querySelector('img')
//   }
// }
