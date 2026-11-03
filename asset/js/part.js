const playerTag = document.querySelector(".player-tag");
const board = document.querySelector(".board");
const cells = board.querySelectorAll(".cell");
const cellItems = [...cells];
const resetBtn = document.querySelector(".reset");

export {board, cellItems, cells, playerTag, resetBtn};