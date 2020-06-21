import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import './SideDrawer.css'
import BackDrop from '../../Burger/UI/Modals/BackDrops/BackDrop'
const sidedrawer = (props) => {
    let attachedClasses = ['SideDrawer','Close']
    if(props.open){
        attachedClasses = ['SideDrawer','Open']
    }
    return (
        <>
        <BackDrop show={props.open} clicked={props.closed}></BackDrop>
        <div className={attachedClasses.join(' ')}>
                <Logo height="11%"/>
            
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
        </>
    )
}
export default sidedrawer