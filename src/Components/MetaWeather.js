import React, {useState} from 'react'
import SearchBar from './SearchBar';
import CityResults from './CityResults'
import WeatherData from './WeatherData';

function MetaWeather() {

    return (
        <div>
            <SearchBar />
            <CityResults />
            <WeatherData city='London'/>
        </div>
    )
}

export default MetaWeather
