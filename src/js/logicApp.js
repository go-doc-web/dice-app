import { Notify } from 'notiflix/build/notiflix-notify-aio';

import imgDice from '../img/dice1.png';
import imgDice2 from '../img/dice2.png';
import imgDice3 from '../img/dice3.png';
import imgDice4 from '../img/dice4.png';
import imgDice5 from '../img/dice5.png';
import imgDice6 from '../img/dice6.png';

import refs from './refs';

// import { currentScore, activePlayer } from '../js/state';
// console.log(currentScore);

//  const audio

let totalScore, currentScore, activePlayer, isPlaying;

const audioPlay = () => {
  refs.audioRollDice.pause();
  refs.audioRollDice.currentTime = 0;
  refs.audioRollDice.play();
};

const getRandomNumber = () => {
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  return diceNumber;
};
const switchActivePlayer = () => {
  Notify.warning('переход хода');
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  refs.player0.classList.toggle('player--active');
  refs.player1.classList.toggle('player--active');

  refs.lable0.classList.toggle('lable--active');
  refs.lable1.classList.toggle('lable--active');
};

export const rollDice = () => {
  if (isPlaying) {
    // 1.Audio click
    audioPlay();
    // Genetate a random number
    const diceNumber = getRandomNumber();
    console.log(diceNumber);
    //   Display Number on the dice
    refs.diceElement.classList.remove('hidden');

    switch (diceNumber) {
      case 1:
        refs.diceElement.src = imgDice;
        break;
      case 2:
        refs.diceElement.src = imgDice2;
        break;
      case 3:
        refs.diceElement.src = imgDice3;
        break;
      case 4:
        refs.diceElement.src = imgDice4;
        break;
      case 5:
        refs.diceElement.src = imgDice5;
        break;
      case 6:
        refs.diceElement.src = imgDice6;
        break;
      default:
        refs.diceElement.classList.add('hidden');
    }
    // if the number is 1, switch to the next player, if not -add number to the current score

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      Notify.success('Next');
    } else {
      switchActivePlayer();
    }
  }
};

export const leave = () => {
  if (isPlaying) {
    // 1. Add current score to active player total score
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    // 2. if total score of active player >= 100 , active player won , if not switch active player
    if (totalScore[activePlayer] >= 20) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      refs.diceElement.classList.add('hidden');
    } else {
      switchActivePlayer();
    }
  }
};

export const initGame = () => {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  refs.diceElement.classList.add('hidden');
  refs.score0Element.textContent = 0;
  refs.score1Element.textContent = 0;
  refs.currentScore0.textContent = 0;
  refs.currentScore1.textContent = 0;
  refs.player0.classList.remove('player--winner');
  refs.player1.classList.remove('player--winner');
  refs.player0.classList.remove('player--active');
  refs.player1.classList.remove('player--active');
  refs.player0.classList.add('player--active');
};

export default { rollDice, leave, initGame };
