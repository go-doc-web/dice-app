import './index.html';
import './index.scss';

import refs from './js/refs';
import { rollDice, leave, initGame } from './js/logicApp';

//Game innitial conditions
initGame();

// Hide the dice element

// Roll the dice

refs.btnRoll.addEventListener('click', rollDice);
refs.btnHold.addEventListener('click', leave);
refs.btnNewGame.addEventListener('click', initGame);
