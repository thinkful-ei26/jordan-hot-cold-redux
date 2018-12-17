import {createStore} from 'redux'
import {combinedReducer} from './reducers/combinedReducer';
// import {newGame, newGuess} from './actions/index.js';

const store = createStore(combinedReducer);
// console.log(store)
// console.log(store.getState());
// store.dispatch(newGuess(18));
// console.log(store.getState());

export default store;