import React from 'react';
import {connect} from 'react-redux';

import './guess-form.css';
import { newGuess } from '../actions';

export class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    // if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.dispatch(newGuess(value));
    // }
    this.input.value = '';
    this.input.focus();

    // onClick={(e) => this.props.dispatch(newGuess(e.target.value))}
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

const mapStateToProps=(state) => {
  console.log(state)
  return {
    newGuess: state.newGuess
  }
};


export default connect(mapStateToProps)(GuessForm);
