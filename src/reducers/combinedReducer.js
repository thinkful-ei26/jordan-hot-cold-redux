import {NEW_GAME, NEW_GUESS, AURAL_STATUS } from '../actions/index.js';

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
        console.log('new guess')
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


    if (action.type === AURAL_STATUS) {
        // const { guesses, feedback } = this.props.state;
    
        // If there's not exactly 1 guess, we want to
        // pluralize the nouns in this aural update.
        const pluralize = this.recentGuesses.length !== 1;
    
        let  auralStatus = `Here's the status of the game right now: ${this.currentFeedback} You've made ${this.recentGuesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
    
        if (this.recentGuesses.length > 0) {
          auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${this.recentGuesses.reverse().join(', ')}`;
        }

        return Object.assign({}, state, {
            auralStatus
        })
    }

    return state;
};