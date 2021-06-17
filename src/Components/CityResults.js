import React from 'react'
import CityCard from './CityCard.js'
import '../CSS/Cities.css'

function CityResults() {
    return (
        <div className='results_container'>
            <CityCard name ='Sample name' lat={14.31} lon={13.87}/>
            <CityCard name ='Sample name' lat={14.31} lon={13.87}/>
            <CityCard name ='Sample name' lat={14.31} lon={13.87}/>
            <CityCard name ='Sample name' lat={14.31} lon={13.87}/>
            <CityCard name ='Sample name' lat={14.31} lon={13.87}/>
        </div>
    )
}

export default CityResults
