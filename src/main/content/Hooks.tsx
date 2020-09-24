import React, { useContext, useRef } from 'react';

import { GlobalContext } from '../../contextProvider/ContextProvider';

function Hooks() {
    const { contextData } = useContext(GlobalContext);
    const renderCounter = useRef(0);

    return (
        <div>
            <h2>Hooks</h2>
            <div className="contentCounter">Context counter state: {contextData.counter}</div>
            <div className="contentRenders" style={{ marginTop: "2em" }}>Total renders: {renderCounter.current++}</div>
        </div>
    );
}

export default Hooks;
