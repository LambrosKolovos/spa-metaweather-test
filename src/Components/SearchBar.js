import React from 'react'
import '../CSS/SearchBar.css'

function SearchBar({onSubmit}) {

    return (
        <div>
            <input className='searchfield' placeholder="Search for a city" onKeyDown={onSubmit}/>
        </div>
    )
}

export default SearchBar
