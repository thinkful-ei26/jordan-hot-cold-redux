//list of everything the user can do will become the actions

//1) input a guess
//2) start a new game
//3) display FAQ/HOW TO


//user gets feedback and guess gets appended to history of guesses array
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


export const AURAL_STATUS = 'AURAL_STATUS';
export const auralStatus = () => ({
    type: AURAL_STATUS
});
