import React, {useState} from 'react'
import SearchBar from './SearchBar';
import WeatherData from './WeatherData';
import CityCard from './CityCard.js'
import '../CSS/Cities.css'

const API = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';

function MetaWeather() {
    const[apiCities, setApiCities] = useState([])
    const[cityData, setCityData] = useState([])
    const[citySelected, setCitySelected] = useState(false)
    const[initial, setInitial] = useState(true)


    const fetchCityResults = async (city) => {
        const res = await fetch(API + 'search/?query=' + city, {
            mode: 'cors'
        })
        setApiCities(await res.json());
    }

    const fetchCityWeather = async (cityID) => {
         const res = await fetch(API + cityID, {
            mode: 'cors'
        })
        setCityData(await res.json());
        console.log(cityData)
    }

    const citySearch = async (e) => {
            if(e.key === 'Enter'){
                console.log("Submitted for: " + e.target.value);
                await fetchCityResults(e.target.value)
                setCitySelected(false);
                setInitial(false)
            }  
        }

    const citySelect = async (cityID) => {
        console.log("Selected: " + cityID)
        setCitySelected(true)
        await fetchCityWeather(cityID)
    }

    return (
        <div>
            <SearchBar onSubmit={citySearch}/>
            {!initial && !citySelected ? 
                    <div className='results_container fade'>
                        {apiCities.map((idx) => {
                            return <CityCard 
                                    key={idx.woeid}
                                    name={idx.title}
                                    lat={idx.latt_long} 
                                    onClick={() => citySelect(idx.woeid)}/>
                        })}
                    </div>
         : <div></div>}
            {citySelected ? <WeatherData data={cityData}/> : <div></div>}
        </div>
    )
}

export default MetaWeather
