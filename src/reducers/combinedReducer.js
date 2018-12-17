import {NEW_GAME, NEW_GUESS} from '../actions/index.js';

const initialState = {
    recentGuesses: [],
    currentFeedback: 'Make a guess!',
    solution: Math.floor(Math.random()*100) +1
};

//

export const combinedReducer = (state=initialState, action) => {
    //all actions should be handled here
    if (action.type === NEW_GAME) {
        console.log('im running')
        return Object.assign({}, state, {
            recentGuesses: [],
            currentFeedback: 'Make a guess!',
            solution: action.solution,
        });
    }

    if (action.type === NEW_GUESS) {
        const feedback = (solution, guess) => {
        const difference = Math.abs(solution - guess);
        
            if (difference === 0) {
                return 'You win!!!';
            }
            else if (difference < 5) {
                return 'Fuego!!';
            }
            else if (difference < 10) {
                return 'Hotter';
            }
            else if (difference < 20) {
                return 'Hot';
            }
            else if (difference < 30) {
                return 'Cold'
            }
            else if (difference < 40) {
                return 'Colder'
            }
            else {
                return 'Freezing!';
            }
        
        }
        return Object.assign({}, state, {
            currentFeedback: feedback(state.solution, action.guess),
            recentGuesses: [...state.recentGuesses, action.guess]
        });
    }

    return state;
};