import '/src/blocks/ticTacToe/ticTacToe.css';
import { popupClose } from "../global-style/popup/popupVisible.js";

const onePlayerBtn = document.querySelector('.tic-tac-toe__popup__game-mode__btn-1');
const twoPlayerBtn = document.querySelector('.tic-tac-toe__popup__game-mode__btn-2');

onePlayerBtn.addEventListener('click', () => {
  selectPlayer(); 
});

twoPlayerBtn.addEventListener('click', () => {
  rivalGame();
  popupClose(twoPlayerBtn.closest('.popup'));
});


function rivalGame() {
  const gameArea = document.querySelector('.tic-tac-toe__container');
  const gameButtons = Array.from(gameArea.childNodes);
  let player = 'X';

  gameArea.addEventListener('click', (event) => {
    if(gameButtons.includes(event.target)) {
      if(player == 'X') {
        event.target.classList.add('x-element');
        player = 'O';
      } else {
        event.target.classList.add('o-element');
        player = 'X';
      }
      gameButtons.splice(gameButtons.indexOf(event.target), 1);
    }
  });
}

function selectPlayer() {
  const windowGameModeSelect = document.querySelector('.tic-tac-toe__popup__game-mode');
  windowGameModeSelect.classList.add('tic-tac-toe__popup__select-player');
  const windowParagraph = document.querySelector('.tic-tac-toe__popup__game-mode__paragraph');
  windowParagraph.textContent = 'Выберите за кого вы будете играть';
  onePlayerBtn.textContent = 'X';
  onePlayerBtn.classList.remove('tic-tac-toe__popup__game-mode__btn-1', 'tic-tac-toe__popup__game-mode__btn');
  onePlayerBtn.classList.add('tic-tac-toe__popup__select-player__btn-1', 'tic-tac-toe__popup__select-player__btn'); 
  twoPlayerBtn.textContent = 'O';
  twoPlayerBtn.classList.remove('tic-tac-toe__popup__game-mode__btn-2', 'tic-tac-toe__popup__game-mode__btn');
  twoPlayerBtn.classList.add('tic-tac-toe__popup__select-player__btn-2', 'tic-tac-toe__popup__select-player__btn'); 
}