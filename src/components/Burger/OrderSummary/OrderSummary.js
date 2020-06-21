import React from 'react'
import Aux from '../../../Hoc/Auxillary/Auxillary'
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) =>{
    return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey} : {props.ingredients[igKey]}</span></li>
    })
    return (
        <Aux>
            <h3> Your Order</h3>
            <p>Delicious Burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price : {props.price.toFixed(2)}</p>
            <p> Continue to checkout</p>
            <button style={{
                backgroundColor:'red',
            }} onClick={props.cancelClicked}>Cancel</button>
            <button style={{
                backgroundColor:'green'
            }}
            onClick={props.continueClicked} >Continue</button>
        </Aux>
    )
}
export default orderSummary