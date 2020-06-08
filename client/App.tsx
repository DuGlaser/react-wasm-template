import React, { FC } from 'react';

interface Props {
  wasm: any;
  children?: never;
}

const App: FC<Props> = (props) => {
  props.wasm.greeting();
  return (
    <>
      <h1>Hello WASM!!</h1>
    </>
  );
};

export default App;
