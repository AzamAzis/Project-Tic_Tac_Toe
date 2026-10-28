import { GameBoard, start } from "./barrel.js";

const board = GameBoard().gameBoard;
const player1 = GameBoard().players[0];
const player2 = GameBoard().players[1];

start(board, 3, player2.choice);