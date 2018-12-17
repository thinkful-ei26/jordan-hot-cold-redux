import React from 'react';

import './guess-count.css';
import { connect } from 'react-redux';

export function GuessCount(props) {
    const isPlural = props.recentGuesses.length !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.recentGuesses.length}</span> {guessNoun}!
        </h2>
    );
}

const mapStateToProps = (state) => {
    return {
        recentGuesses: state.recentGuesses
    }
}

export default connect(mapStateToProps)(GuessCount);