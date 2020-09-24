import React, { useContext, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { GlobalContext } from '../contextProvider/ContextProvider';

function Data() {
    const { contextData, dispatch } = useContext(GlobalContext);
    const [ inputValue, setInputValue ] = useState<number>(1);
    const reduxData = useSelector<any>(state => state);
    const reduxDispatch = useDispatch();

    const handleButtons = (actionType: string) => {
        const dispatchObject = {
            type: actionType,
            payload: inputValue
        }

        dispatch(dispatchObject);
        reduxDispatch(dispatchObject);
    }

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
            <div>
                <div style={{ textAlign: "center" }}>
                    <div>
                        <label>Value for counter: </label>
                        <input
                            style={{ width: "30%" }}
                            defaultValue={inputValue}
                            type="number"
                            onChange={e => setInputValue(parseInt(e.target.value))}></input>
                    </div>
                    <button style={{ width: "40%" }} onClick={() => handleButtons('INCREMENT')}>Increment counter</button>
                    <button style={{ width: "40%" }} onClick={() => handleButtons('DECREMENT')}>Decrement counter</button>
                    <button onClick={() => handleButtons('RESET')}>Reset counter</button>
                </div>
                <div>
                    <div style={{ textAlign: "center" }}>
                        <label>set data.name: </label>
                        <input
                            style={{ width: "30%" }}
                            placeholder=""
                            onChange={e => {
                                const dispatchObject = {
                                    type: "SETNAME",
                                    payload: e.target.value
                                }

                                dispatch(dispatchObject);
                                reduxDispatch(dispatchObject);
                            }}></input>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <label>set data.age: </label>
                        <input
                            style={{ width: "30%" }}
                            placeholder="0"
                            type="number"
                            onChange={e => {
                                const dispatchObject = {
                                    type: "SETAGE",
                                    payload: e.target.value ? parseInt(e.target.value) : 0
                                }

                                dispatch(dispatchObject);
                                reduxDispatch(dispatchObject);
                            }}></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
