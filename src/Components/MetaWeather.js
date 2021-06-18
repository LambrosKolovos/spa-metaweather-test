import React, {useState} from 'react'
import SearchBar from './SearchBar';
import WeatherData from './WeatherData';
import CityCard from './CityCard.js'
import '../CSS/Cities.css'
import noResultImg from '../Assets/noresults.png';
import searchImg from '../Assets/search.png';
import Switch from './Switch.js'
import Footer from './Footer.js'
import Logo from './Logo.js'

const API = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';

function MetaWeather() {
    const[apiCities, setApiCities] = useState([])
    const[cityData, setCityData] = useState([])
    const[citySelected, setCitySelected] = useState(false)
    const[initial, setInitial] = useState(true)
    const[isCelsius, setIsCelsius]= useState(true)

    const userLanded = initial;
    const userSearched = apiCities.length !== 0 && !citySelected;
    const userSelectedCity = citySelected;
    const searchFailed = apiCities.length === 0 && !initial;

    const fetchCityResults = async (city) => {
        const res = await fetch(API + 'search/?query=' + city)
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

    const toggleCelsius = () => {
        setIsCelsius(!isCelsius);
        
    }

    return (
        <div>
            <Logo />
            <SearchBar onSubmit={citySearch}/>
            <Switch onClick={toggleCelsius}/>
            {
                userLanded ? 
                <div className='placeholder_div'>
                    <img src={searchImg} alt="search" width="256" style={{textAlign: 'center'}}/>
                    <div> Search for a city and results will appear here!</div>
                </div> : '' 
            }
            {
                searchFailed ? 
                <div className='placeholder_div'>
                    <img src={noResultImg} width='256px' alt='error' />
                    <div>Oops no results found! Please try again!</div>
                </div> : ''
            } 
            {
                userSearched? <div className='results_container fade'>
                    {apiCities.map((idx) => {
                        return <CityCard 
                                key={idx.woeid}
                                name={idx.title}
                                lat={idx.latt_long} 
                                onClick={() => citySelect(idx.woeid)}/>
                    })}
                </div> : ''
            }
            {
                userSelectedCity ? 
                    <WeatherData data={cityData} isCelsius={isCelsius} /> : ''
            }
            <Footer />
        </div>
    )
}

export default MetaWeather
