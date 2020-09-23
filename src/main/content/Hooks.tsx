import React, { useContext, useRef } from 'react';

import { GlobalContext } from '../../contextProvider/ContextProvider';

const exportHooks = React.memo(function Hooks() {
    const { contextData, dispatch } = useContext(GlobalContext);
    const renderCounter = useRef(0);

    return (
        <div>
            <h2>Hooks</h2>
            <div className="contentCounter">Counter state: {contextData.counter}</div>
            <div className="contentData" onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>click</div>
            <div className="contentRenders">Total renders: {renderCounter.current++}</div>
        </div>
    );
}
)

export default exportHooks;
