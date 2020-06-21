import React from 'react'
import bugerLogo from '../../assests/Images/original.png'
import './Logo.css' 

const logo = ( props) => {
    return (
        <div className='Logo' style={{height: props.height}}>
            <img src={bugerLogo} alt='Not'></img>
        </div>
    )
}
export default logo