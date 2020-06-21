import React from 'react'
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {label : 'Salad',type:'salad'},
    {label : 'Bacon',type:'bacon'},
    {label : 'Cheese',type:'cheese'},
    {label : 'Meat',type:'meat'}
    
]
const buildControls = (props) => {
    return (
        <div>
        <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        <div className='BuildControls'>
        {
            controls.map(ctrl => {
                return <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                
                added={() => {props.ingredientAdded(ctrl.type)}}
                removed={() => {props.ingredientRemoved(ctrl.type)}}
                ></BuildControl>
            })
        }
        <button disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
        </div>
        </div>
    )

}
export default buildControls
