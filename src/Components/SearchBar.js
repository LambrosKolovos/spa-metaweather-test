import React from 'react'
import '../CSS/SearchBar.css'
import {BsSearch} from 'react-icons/bs';

function SearchBar({onSubmit}) {

    return (
        <div>
            <input className='searchfield' placeholder="Enter city name..." onKeyDown={onSubmit}/>
            <button className='search_btn' onClick={onSubmit}><BsSearch/></button>
        </div>
    )
}

export default SearchBar
