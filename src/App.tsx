import React from 'react';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combinedReducers from './redux/reducers'

import { ContextProvider } from './contextProvider/ContextProvider'

// component imports
import Data from './main/Data'
import Content from './main/Content'

const store = createStore(combinedReducers);

function App() {
  return (
    <>
      <header><h1>State managment app</h1></header>
      <main>
        {/* redux */}
        <Provider store={store}>
          {/* useContext */}
          <ContextProvider>
            <Data />
            <Content />
          </ContextProvider>
        </Provider>
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
