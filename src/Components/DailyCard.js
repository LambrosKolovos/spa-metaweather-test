import React from 'react'
import '../CSS/DailyCard.css'
import {FiSun} from 'react-icons/fi';
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {WiRainWind} from 'react-icons/wi'
import {FiCloudSnow} from 'react-icons/fi'
import {WiDayThunderstorm} from 'react-icons/wi'
import {BsCloud} from 'react-icons/bs'

const getIcon = (abbr) => {
    switch(abbr){
        case 'c':
            return <FiSun size={65} color='#daf5fa'/>
        case 'hc':   
            return <BsCloud size={65} color='#daf5fa'/>
        case 'lc':
            return <TiWeatherPartlySunny size={65} color='#daf5fa'/>
        case 's':
        case "lr":
        case "hr":
            return <WiRainWind size={65} color='#daf5fa'/>
        case 'sl':
        case 'sn':
        case  'h':
            return <FiCloudSnow size={65} color='#daf5fa'/>
        case 't':
            return <WiDayThunderstorm size={65} color='#daf5fa'/>
    }
}

function DailyCard({max, min, abbr, onClick}) {
    var maxTemp = JSON.stringify(max).slice(0, 2)
    var minTemp = JSON.stringify(min).slice(0, 2)
    return (
      
        <div className='city_card' onClick={()=> onClick()}>
             {console.log(abbr)}
            <div className='day'>Mon</div>
            {getIcon(abbr)}
            <div className='max_temp'>{maxTemp}° C</div>
            <div className='min_temp'>{minTemp}° C</div>
        </div>
    )
}

export default DailyCard
