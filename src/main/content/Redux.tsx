import React, { useRef } from 'react';

import { useSelector } from 'react-redux'

function Redux() {
    const reduxCounter = useSelector<any>(state => state.counterReducerName.counter);
    const renderCounter = useRef(0);

    return (
        <div>
            <h2>Redux</h2>
            <div className="contentCounter">Redux counter state: {reduxCounter}</div>
            <div className="contentRenders" style={{ marginTop: "2em" }}>Total renders: {renderCounter.current++}</div>
        </div>
    );
}

export default Redux;
