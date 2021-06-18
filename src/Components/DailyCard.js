import React from 'react'
import '../CSS/DailyCard.css'

function DailyCard({date, max, min, icon, suffix, onClick, selected}) {
    var maxTemp = JSON.stringify(max).slice(0, 2)
    var minTemp = JSON.stringify(min).slice(0, 2)
    return (
      
        <div className={selected? 'city_card selected' : 'city_card'} onClick={()=> onClick()}>
            <div className='day'>{date}</div>
            {icon}
            <div className='max_temp'>{maxTemp}{suffix}</div>
            <div className='min_temp'>{minTemp}{suffix}</div>
        </div>
    )
}

export default DailyCard
