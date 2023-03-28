// Element selection

const refs = {
  // Audio
  audioRollDice: document.querySelector('.audio-roll'),
  // Score global
  score0Element: document.getElementById('score--0'),
  score1Element: document.getElementById('score--1'),
  //   Dice element
  diceElement: document.querySelector('.dice'),
  //   Btn
  btnNewGame: document.querySelector('.btn--new'),
  btnRoll: document.querySelector('.btn--roll'),
  btnHold: document.querySelector('.btn--hold'),

  // Current score
  currentScore0: document.getElementById('current--0'),
  currentScore1: document.getElementById('current--1'),

  // Player
  player: document.querySelector('.player'),
  player0: document.querySelector('.player--0'),
  player1: document.querySelector('.player--1'),
  lable0: document.querySelector('.lable--0'),
  lable1: document.querySelector('.lable--1'),
};

export default refs;
