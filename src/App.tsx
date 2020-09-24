import React from 'react';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combinedReducers from './redux/reducers'

import { ContextProvider } from './contextProvider/ContextProvider'

// component imports
import Data from './main/Data'
import Content from './main/Content'
import Controls from './main/Controls'

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
            <Controls />
          </ContextProvider>
        </Provider>
      </main>
      <footer>
        Source code hosted on: <a href="https://github.com/bunatl/reactjs-data-and-state-managment" target="__blank" rel="noreferrer noopener" >GitHub</a>
        <br />
       Lukas Bunat @ 2020
    </footer>
    </>
  );
}

export default App;
