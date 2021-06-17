import React from 'react'

function Stat({icon, title, value}) {
    return (
        <div style={{display: 'flex', marginBottom: '20px'}}>
            {icon}
            <div>
                <div style={{fontSize: '18px', color: '#DAF5FA'}}>{title}</div>
                <div style={{textAlign: 'start'}}>{value}</div>
            </div>
        </div>
    )
}

export default Stat