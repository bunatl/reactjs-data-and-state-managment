import React from 'react';

// component imports
import Data from './main/Data'
import Content from './main/Content'

function App() {
  return (
    <>
      <header><h1>State managment app</h1></header>
      <main>
        <Data />
        <Content />
      </main>
      <footer>
        Lukas Bunat
        <br />
        @ 2020
      </footer>
    </>
  );
}

export default App;
