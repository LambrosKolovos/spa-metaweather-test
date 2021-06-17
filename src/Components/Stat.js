import React from 'react'

function Stat({icon, title, value, suffix}) {

    var val = JSON.stringify(value).slice(0, 5)
    return (
        <div style={{display: 'flex', marginBottom: '20px'}}>
            {icon}
            <div style={{paddingLeft: '10px'}}>
                <div style={{fontSize: '18px', color: '#DAF5FA'}}>{title}</div>
                <div style={{textAlign: 'start'}}>{val} {suffix}</div>
            </div>
        </div>
    )
}

export default Stat