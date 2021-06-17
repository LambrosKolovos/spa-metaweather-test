import React from 'react'
import {TiWeatherSunny} from 'react-icons/ti';
import '../CSS/DailyCard.css'

function DailyCard() {
    return (
        <div className='city_card'>
            <div className='day'>Mon</div>
            <TiWeatherSunny size={60} color='#daf5fa' />
            <div className='max_temp'>21° C</div>
            <div className='min_temp'>15° C</div>
        </div>
    )
}

export default DailyCard
