import React, { useContext } from 'react';

import { useSelector } from 'react-redux'
import { GlobalContext } from '../contextProvider/ContextProvider';

function Data() {
    const { contextData } = useContext(GlobalContext);
    const reduxData = useSelector<any>(state => state);

    return (
        <div className="data">
            <div>
                <h3>useContext data:</h3>
                <pre>{JSON.stringify(contextData, null, 2)}</pre>
            </div>
            <div>
                <h3>Redux data:</h3>
                <pre>{JSON.stringify(reduxData, null, 2)}</pre>
            </div>
        </div>
    );
}

export default Data;
