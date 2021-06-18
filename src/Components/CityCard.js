import React from 'react'
import {GiModernCity} from 'react-icons/gi'

function CityCard({name, lat, onClick}) {
    return (
        <div className='city_card' onClick={() => onClick()}>
            <GiModernCity size={60} color='#073a60'/>
            <div className='city_name'>
                {name}
            </div>
            <div className='city_cords'>
                {lat} 
            </div>
        </div>
    )
}

export default CityCard
