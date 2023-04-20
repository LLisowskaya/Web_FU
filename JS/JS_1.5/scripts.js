// Defined Variables
let cards = [];
let sum = 0;
let message = "";
let gameOver = false;
let hasBlackJack = false;
let messageEl = document.getElementById("message-el"); 
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el"); 
let playerEl = document.getElementById("player-el"); 
let player = {
  name: "Олеся",
  chips: 200,
};


function startGame() {
  if (sum === 0) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = cards[0] + cards[1];
    renderGame();
  } else if (gameOver === false && hasBlackJack === false) {
    messageEl.innerText = "Игра уже началась";
  } else {
    messageEl.innerText = "Игра окончена";
  }
}


function newCard() {
  let Card = getRandomCard();
  if (gameOver === false && hasBlackJack === false && sum > 0) {
    sum += Card;
    cards.push(Card);
    renderGame();
  } else if (hasBlackJack === true) {
    messageEl.innerText = "Ты уже победилn";
  } else if (gameOver === true) {
    messageEl.innerText = "Игра окончена";
  } else {
    messageEl.innerText = "Ты еще не можешь начать новую игру";
  }
}


function getRandomCard(randomNumber) {
  randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber >= 11) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else return randomNumber;
}


function renderGame() {
  if (sum < 21) {
    message = "Взять другую карту?";
    hasBlackJack = false;
  } else if (sum === 21) {
    message = "Ура! У тебя Блэк Джек!";
    hasBlackJack = true;
  } else {
    message = "Банкрот";
    gameOver = true;
  }
  messageEl.innerText = message;

  cardsEl.textContent = "Карты:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.innerText = "Сумма" + " " + sum;
}


playerEl.textContent = player.name + " : $" + player.chips;
