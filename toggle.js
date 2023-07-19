import React , { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch(){
    const[checked, setChecked] = useState(true);

    const handleChange = val => {
        setChecked(val)
    }
    return (
        <div className="app" style={{textAlign: "center"}}>
            <h1>Toggle switch in React</h1>
            <ReactSwitch
            checked={checked}
            onChange={handleChange}
            />
        </div>
    );
}

export default ToggleSwitch;