import React from 'react'

function Footer() {
    return (
        <div className='footer'>
           <div className='footer-right'> Developed by <a href="https://www.linkedin.com/in/lambros-kolovos-924a3820a/" rel="noreferrer" target="_blank">Lambros Kolovos</a> as part of an assignement</div>
           <div>
            <a href="https://github.com/LambrosKolovos/spa-metaweather-test" rel="noreferrer" target="_blank">Source code</a> • 
            Data taken from <a href="https://www.metaweather.com/" rel="noreferrer" target="_blank">Metaweather</a> • <a href="https://cors-anywhere.herokuapp.com/" rel="noreferrer" target="_blank">Proxy Server</a> • <a href="https://storyset.com/" rel="noreferrer" target="_blank">Illustrations</a>
           </div>
        </div>
    )
}

export default Footer
