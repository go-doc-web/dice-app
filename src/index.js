import './index.html';
import './index.scss';

import refs from './js/refs';
import { rollDice, leave, initGame } from './js/logicApp';

//Game innitial conditions
initGame();

refs.btnRoll.addEventListener('click', rollDice);
refs.btnHold.addEventListener('click', leave);
refs.btnNewGame.addEventListener('click', initGame);
