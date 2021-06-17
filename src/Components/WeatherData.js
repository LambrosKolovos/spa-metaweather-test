import React from 'react'
import '../CSS/WeatherData.css'
import {RiSunCloudyLine} from 'react-icons/ri';
import {WiHumidity} from 'react-icons/wi';
import {AiOutlineCompass} from 'react-icons/ai';
import {FiWind} from 'react-icons/fi';
import {WiWindy} from 'react-icons/wi'
import DailyCard from './DailyCard'
import Stat from './Stat.js'
import { useState, useEffect } from 'react';

function WeatherData({data}) {
    const [weeklyData, setWeeklyData] = useState([]);
    const [infoIdx, setInfoIdx] = useState(0);

    useEffect(() => {
        setWeeklyData(weeklyData)
    }, [weeklyData])

    const showInfo = (id) => {
        console.log("Clicked: " + id);
        setInfoIdx(id);
    }

    return (
        <div>
            {data.consolidated_weather ?  <div className='weatherdata_container fade'>
            <div className='currentdata_container'>
                <div className='city_info'>
                    <div style={{fontSize: '40px', color: '#073a60'}}>{data.title}</div>
                    <div style={{display: 'flex'}}>
                        <RiSunCloudyLine size={80} color='#DAF5FA' /> <br/>
                        <div style={{marginLeft: '15px', color: '#073a60'}}>
                            <div style={{fontSize: '40px'}}>
                                { data.consolidated_weather ?  JSON.stringify(data.consolidated_weather[infoIdx].the_temp).slice(0,2): ''}
                            </div>
                            <div> { data.consolidated_weather ?  data.consolidated_weather[0].weather_state_name: ''}</div>
                        </div>
                    </div>
                </div>
                <div className = 'dailystats'>
                   <div style={{marginRight: '40px'}}>
                        <Stat icon={<WiHumidity color='#073a60' size={50} />} title="Humidity" value={data.consolidated_weather[infoIdx].humidity} suffix="%" />
                        <Stat icon={<WiWindy color='#073a60' size={50} />} title="Visibility" value={data.consolidated_weather[infoIdx].visibility} suffix="%" />
                   </div>
                   <div>
                       <Stat icon={<FiWind color='#073a60' size={45} />} title="Wind Speed" value={data.consolidated_weather[infoIdx].wind_speed} suffix="m/s"  />
                       <Stat icon={<AiOutlineCompass color='#073a60' size={45} />} title="Wind Direction" value={data.consolidated_weather[infoIdx].wind_direction_compass} suffix=""/>
                   </div>
                </div>
            </div>
            <div className='weeklydata_container'>
                {
                    data.consolidated_weather ? data.consolidated_weather.map((item, idx) => {
                        return <DailyCard 
                            key={item.id} 
                            max={item.max_temp}
                            min={item.min_temp} 
                            abbr={item.weather_state_abbr}
                            onClick={()=> showInfo(idx)}
                        />
                    }) : <div></div>
                }
            </div>
        </div>:<div>Loading</div>}
        </div>
    )
}

export default WeatherData
           
