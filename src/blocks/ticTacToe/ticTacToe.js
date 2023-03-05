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
  const infoArea = document.querySelector('.tic-tac-toe__game-info__container');
  let player = 'X';

  const playerInfo = document.createElement('div');
  playerInfo.className = 'game-info player-info';
  infoArea.append(playerInfo);
  playerInfo.textContent = 'Ход крестиков';

  const gamingData = [
    {
      btn_11: false,
      btn_12: false,
      btn_13: false,
    },
    {
      btn_21: false,
      btn_22: false,
      btn_23: false,
    },
    {
      btn_31: false,
      btn_32: false,
      btn_33: false,
    },
    {
      btn_11: false,
      btn_21: false,
      btn_31: false,
    },
    {
      btn_12: false,
      btn_22: false,
      btn_32: false,
    },
    {
      btn_13: false,
      btn_23: false,
      btn_33: false,
    },
    {
      btn_11: false,
      btn_22: false,
      btn_33: false,
    },
    {
      btn_13: false,
      btn_22: false,
      btn_31: false,
    },
  ];
  
  gameArea.addEventListener('click', (event) => {
    if(gameButtons.includes(event.target)) {
      if(player == 'X') {
        event.target.classList.add('x-element');
        player = 'O';
        playerInfo.textContent = 'Ход ноликов';
      } else if(player == 'O') {    
        event.target.classList.add('o-element');
        player = 'X';
        playerInfo.textContent = 'Ход крестиков';
      }
      gameButtons.splice(gameButtons.indexOf(event.target), 1);
      
      gamingData.forEach((obj) => {
        let X = 0;
        let O = 0;
        Object.keys(obj).forEach((key) => {
          if(event.target.classList[1] == key && obj[key] == false) {
            obj[key] = player == 'X'?'O':'X';
          } else if(obj[key] == 'X') {
            X += 1;
          } else if(obj[key]) {
            O += 1;
          }
        });
        if(X == 3) {
          console.log('Победили X');
        } else if(O == 3) {
          console.log('Победили O');
        }
      });
      console.log(gamingData);
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