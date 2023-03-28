import './index.html';
import './index.scss';

import refs from './js/refs';
import { rollDice, leave } from './js/logicApp';

//Game innitial conditions
refs.score0Element.textContent = 0;
refs.score1Element.textContent = 0;

// Hide the dice element

refs.diceElement.classList.add('hidden');

// Roll the dice

refs.btnRoll.addEventListener('click', rollDice);
refs.btnHold.addEventListener('click', leave);
