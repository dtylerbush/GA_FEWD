/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

// on click of .js-ball add 25 points 
ballEl.addEventListener('click',function(){
  score += 25;

  if (score < 100){
    scoreEl.innerText = score;
  } else {
    declareWinner();
  }
});

function declareWinner() {
  document.body.classList.add('game-over');
}