import React, {useState} from 'react'
import SearchBar from './SearchBar';
import CityResults from './CityResults'
import WeatherData from './WeatherData';

const API = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';

function MetaWeather() {
    const[apiCities, setApiCities] = useState([])
    const[citySelected, setCitySelected] = useState(false)

    const fetchCityResults = async (city) => {
        const res = await fetch(API + 'search/?query=' + city, {
            mode: 'cors'
        })
        setApiCities(await res.json());
    }

    const citySearch = async (e) => {
            if(e.key === 'Enter'){
                console.log("Submitted for: " + e.target.value);
                await fetchCityResults(e.target.value)
                setCitySelected(false);
            }  
        }

    const toggleSelected = () => {
        setCitySelected(!citySelected)
    }
    return (
        <div>
            {console.log(apiCities)}
            <SearchBar onSubmit={citySearch}/>
            {!citySelected ? <CityResults data={apiCities} onClick={toggleSelected} /> : <WeatherData city='London'/> }
        </div>
    )
}

export default MetaWeather
