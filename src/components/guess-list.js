import React from 'react';
import {connect} from 'react-redux';

import './guess-list.css';

export function GuessList(props) {
  const guesses = props.recentGuesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    recentGuesses: state.recentGuesses
  }
};

export default connect(mapStateToProps)(GuessList)


