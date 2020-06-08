import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import('../pkg')
  .then((wasm) => {
    ReactDOM.render(<App wasm={wasm} />, document.getElementById('app'));
  })
  .catch(console.error);
