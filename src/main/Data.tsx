import React, { useContext, useState } from 'react';

import { GlobalContext } from '../contextProvider/ContextProvider';

function Data() {
    const { contextData, dispatch } = useContext(GlobalContext);
    const [ inputValue, setInputValue ] = useState<number>(1);

    const handleButtons = (actionType: string) => {
        dispatch({
            type: actionType,
            payload: inputValue
        })
    }

    return (
        <div className="data">
            <div>
                <h3>useContext data:</h3>
                <pre>{JSON.stringify(contextData, null, 2)}</pre>
            </div>
            <div>
                <h3>Redux data:</h3>
                <pre>{JSON.stringify(contextData, null, 2)}</pre>
            </div>
            <div>
                <div>
                    <div style={{ textAlign: "center" }}>
                        <label>Value for counter: </label>
                        <input
                            style={{ width: "30%" }}
                            // placeholder="value" 
                            defaultValue={inputValue}
                            onChange={e => setInputValue(parseInt(e.target.value))}></input>
                    </div>
                    <button onClick={() => handleButtons('INCREMENT')}>Increment counter</button>
                    <button onClick={() => handleButtons('DECREMENT')}>Decrement counter</button>
                    <button onClick={() => handleButtons('RESET')}>Reset counter</button>
                </div>
                <div>
                    <div style={{ textAlign: "center" }}>
                        <label>set data.name: </label>
                        <input
                            style={{ width: "30%" }}
                            placeholder=""
                            // defaultValue={name}
                            onChange={e => dispatch({
                                type: "SETNAME",
                                payload: e.target.value
                            })}></input>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <label>set data.age: </label>
                        <input
                            style={{ width: "30%" }}
                            placeholder="0"
                            type="number"
                            // defaultValue={age}
                            onChange={e => dispatch({
                                type: "SETAGE",
                                payload: e.target.value ? parseInt(e.target.value) : 0
                            })}></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
