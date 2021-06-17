import React from 'react'
import '../CSS/WeatherData.css'
import {RiSunCloudyLine} from 'react-icons/ri';
import {WiHumidity} from 'react-icons/wi';
import DailyCard from './DailyCard'
import Stat from './Stat.js'

function WeatherData({city}) {
    return (
        <div className='weatherdata_container'>
            <div className='currentdata_container'>
                <div className='city_info'>
                    <div style={{fontSize: '40px', color: '#073a60'}}>{city}</div>
                    <div style={{display: 'flex'}}>
                        <RiSunCloudyLine size={80} color='#DAF5FA' /> <br/>
                        <div style={{marginLeft: '15px', color: '#073a60'}}>
                            <div style={{fontSize: '40px'}}>16</div>
                            <div>Cloudy</div>
                        </div>
                    </div>
                </div>
                <div className = 'dailystats'>
                   <div style={{marginRight: '40px'}}>
                        <Stat icon={<WiHumidity size={30} />} title="Humidity" value="30%" />
                        <Stat icon={<WiHumidity size={30} />} title="Humidity" value="30%" />
                   </div>
                   <div>
                        <Stat icon={<WiHumidity size={30} />} title="Humidity" value="30%" />
                        <Stat icon={<WiHumidity size={30} />} title="Humidity" value="30%" />

                   </div>
                </div>
            </div>
            <div className='weeklydata_container'>
                <DailyCard />
                <DailyCard />
                <DailyCard />
                <DailyCard />
                <DailyCard />
                <DailyCard />
            </div>
        </div>
    )
}

export default WeatherData
