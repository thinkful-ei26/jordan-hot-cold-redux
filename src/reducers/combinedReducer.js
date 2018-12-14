import {NEW_GAME, NEW_GUESS, GAME_FEEDBACK} from './actions';

const initialState = {
    recentGuesses: [],
    currentFeedback: 'Make a guess!',
    solution: Math.floor(Math.random()*100) +1
};

//

export default combinedReducer = (state=initialState, action) => {
    //all actions should be handled here
    if (action.type === NEW_GAME) {
        return Object.assign({}, state, {
            recentGuesses: [],
            currentFeedback: 'Make a guess!',
            solution: action.solution
        });
}

    return state;
};