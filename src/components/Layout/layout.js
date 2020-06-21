import React, {Component} from 'react'
import Aux from '../../Hoc/Auxillary/Auxillary'
import './layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
    state = {
        showSideDrawer : false
    }
    sideDrawerHandler = () => {
        this.setState({showSideDrawer:false})
    }
    sideDrawerOpener = () => {
        this.setState({showSideDrawer:!this.state.showSideDrawer})
    }  
render(){
    return (
        <Aux>
            <Toolbar open={this.sideDrawerOpener}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler}/>
            <main className='Content'>
            {this.props.children}
            </main>
        </Aux>
        
    )
    }
}
export default Layout