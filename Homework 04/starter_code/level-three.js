/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

arenaEl.addEventListener('click', function(hitBall) {
    if (hitBall.target.classList.contains('js-ball')) {
        score += parseInt(hitBall.target.dataset.increment);
        if (score < 300) {
            scoreEl.innerText = score;
        } else {
            declareWinner();
        }
        }
    })

function declareWinner() {
    document.body.classList.add('game-over');
  }
