import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler'
const toolbar = (props) => {
    return (
        <header className='Toolbar'>
                <DrawerToggler clicked={props.open}></DrawerToggler>
                    <Logo height="80%"/>
                
                <nav className='DesktopOnly'>
                    <NavigationItems></NavigationItems>
                </nav>
        </header>
    )
}
export default toolbar