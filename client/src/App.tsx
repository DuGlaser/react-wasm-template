import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [wasmModule, setWasmModule] = useState();
  const [loading, setLoading] = useState(false);

  const loadWasm = async () => {
    try {
      const wasm = await import('react-wasm-template');
      setWasmModule({ wasm });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const f = async () => {
      setLoading(true);
      await loadWasm();
      setLoading(false);
    };

    f();
  }, []);
  if (loading) {
    return <div></div>;
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button
            style={{ margin: '20px' }}
            onClick={() => console.log(wasmModule.wasm.greeting())}
          >
            Hello WASM!!
          </button>
        </header>
      </div>
    );
  }
};

export default App;
