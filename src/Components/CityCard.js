import React from 'react'
import {GiModernCity} from 'react-icons/gi'

function CityCard({name, lat, lon}) {
    return (
        <div className='city_card'>
            <GiModernCity size={60} color='#073a60'/>
            <div className='city_name'>
                {name}
            </div>
            <div>
                Lat: {lat} Lon: {lon}
            </div>
        </div>
    )
}

export default CityCard
