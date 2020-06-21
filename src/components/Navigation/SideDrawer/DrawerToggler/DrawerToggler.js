import React from 'react'
import './DrawerToggler.css'
const drawertoggler = (props) => {
    return (
   <div className='DrawerToggle' onClick={props.clicked}>
       <div></div>
       <div></div>
       <div></div>
       
   </div>
    )
}
export default drawertoggler