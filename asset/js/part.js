const playerTag = document.querySelector(".player-tag");
const board = document.querySelector(".board");
const cells = board.querySelectorAll(".cell");
const cellItems = [...cells];

export {board, cellItems, cells, playerTag};