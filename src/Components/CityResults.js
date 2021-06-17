import React from 'react'
import CityCard from './CityCard.js'
import '../CSS/Cities.css'

function CityResults({data, onClick}) {
    return (
        <div className='results_container'>
            {data.map((idx) => {
                return <CityCard 
                        key={idx.woeid}
                        name={idx.title}
                        lat={idx.latt_long} 
                        onClick={onClick}/>
            })}
        </div>
    )
}

export default CityResults
