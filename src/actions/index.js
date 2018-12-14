//list of everything the user can do will become the actions

//1) input a guess
//2) start a new game
//3) get the info from the game

export const NEW_GUESS = 'NEW_GUESS';
export const newGuess = (guess) => ({
    type: NEW_GUESS,
    guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = (solution) => ({
    type: NEW_GAME,
    solution
});

export const GAME_FEEDBACK = 'GAME_INFO';
export const gameInfo = () => ({
    type: GAME_INFO,
})