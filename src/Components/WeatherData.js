import React from 'react'
import '../CSS/WeatherData.css'
import {WiHumidity} from 'react-icons/wi';
import {AiOutlineCompass} from 'react-icons/ai';
import {FiWind} from 'react-icons/fi';
import {WiWindy} from 'react-icons/wi'
import DailyCard from './DailyCard'
import Stat from './Stat.js'
import { useState, useEffect } from 'react';
import loadingImg from '../Assets/loading.png'
import {FiSun} from 'react-icons/fi';
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {WiRainWind} from 'react-icons/wi'
import {FiCloudSnow} from 'react-icons/fi'
import {WiDayThunderstorm} from 'react-icons/wi'
import {BsCloud} from 'react-icons/bs'


const getIcon = (abbr, main) => {
    switch(abbr){
        case 'c':
            return <FiSun size={main? 100 : 65} color='#daf5fa'/>
        case 'hc':   
            return <BsCloud size={main? 100 : 65} color='#daf5fa'/>
        case 'lc':
            return <TiWeatherPartlySunny size={main? 100 : 65} color='#daf5fa'/>
        case 's':
        case "lr":
        case "hr":
            return <WiRainWind size={main? 100 : 65} color='#daf5fa'/>
        case 'sl':
        case 'sn':
        case  'h':
            return <FiCloudSnow size={main? 100 : 65} color='#daf5fa'/>
        case 't':
            return <WiDayThunderstorm size={main? 100 : 65} color='#daf5fa'/>
        default:
            return ''
    }
}

function WeatherData({data, isCelsius}) {
    const [weeklyData, setWeeklyData] = useState([]);
    const [infoIdx, setInfoIdx] = useState(0);
    useEffect(() => {
        setWeeklyData(weeklyData)
    }, [weeklyData])

    const showInfo = (id) => {
        console.log("Clicked: " + id);
        setInfoIdx(id);
    }

    const convertToFahr = (deg) => {
        return deg * 9/5 + 32;
    }

    const getDate = (date) => {
       var dateStr = JSON.stringify(date);
       return dateStr.slice(9,11) + " / " + dateStr.slice(6,8)
    }

    return (
        <div>
            {data.consolidated_weather ?  <div className='weatherdata_container fade'>
            <div className='currentdata_container'>
                <div className='city_info'>
                    <div style={{fontSize: '40px', color: '#073a60', textAlign: 'start'}}>
                        {data.title}, <br/> {getDate(data.consolidated_weather[infoIdx].applicable_date)}
                    </div>
                    <div style={{display: 'flex'}}>
                        {getIcon(data.consolidated_weather[infoIdx].weather_state_abbr, true)}
                        <div style={{marginLeft: '15px', color: '#073a60'}}>
                            <div style={{fontSize: '45px'}}>
                                { isCelsius ? 
                                    JSON.stringify(data.consolidated_weather[infoIdx].the_temp).slice(0,2) + "° C" :
                                    convertToFahr(JSON.stringify(data.consolidated_weather[infoIdx].the_temp).slice(0,2)) + "° F" }
                            </div>
                            <div style={{textAlign: 'start'}}> {data.consolidated_weather[infoIdx].weather_state_name}</div>
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
                    data.consolidated_weather.map((item, idx) => {
                        return <DailyCard 
                            key={item.id}
                            selected={idx === infoIdx}
                            date={getDate(item.applicable_date)}
                            max={isCelsius ? item.max_temp : convertToFahr(item.max_temp)}
                            min={isCelsius ? item.max_temp : convertToFahr(item.max_temp)} 
                            icon={getIcon(item.weather_state_abbr)}
                            suffix = {isCelsius ? "° C" : "° F"}
                            onClick={()=> showInfo(idx)
                            }
                        />
                    })
                }
            </div>
        </div>:<div className='placeholder_div'>
                <img src={loadingImg} width="256" alt="loading"></img>
                <div>Fetching weather...</div>
        </div>}
        </div>
    )
}

export default WeatherData
           
