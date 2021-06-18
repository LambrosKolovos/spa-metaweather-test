import React from 'react'
import '../CSS/Switch.css'

function Switch({onClick}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
            <div className='value' style={{marginRight: '15px'}}>° C</div>
            <label className="switch" >
                <input type="checkbox"onClick={onClick} />
                <span className="slider round"></span> 
            </label>
            <div className='value' style={{marginLeft: '15px'}}>° F</div>
        </div>
    )
}

export default Switch
