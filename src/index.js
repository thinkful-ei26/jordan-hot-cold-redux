import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';
import store from './store.js';
import Game from './components/game';

ReactDOM.render(
  // <Store />,
  <Game />,
  document.getElementById('root')
);
 