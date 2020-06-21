import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey+i} type={igKey}></BurgerIngredient>
        })
    }).reduce((arr,el) =>{
        return arr.concat(el)
    },[])
    if (transformedIngredient.length === 0){
        transformedIngredient = <p>Please add some ingredients </p>
    }
    return (
        <div className='Burger'> 
            <BurgerIngredient type='bread-top'></BurgerIngredient>
                {transformedIngredient}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
       
        </div>
    )
} 
export default burger