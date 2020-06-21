import React, {Component} from 'react'
import Aux from '../../Hoc/Auxillary/Auxillary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Burger/UI/Modals/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICE = {
    cheese : 0.5,
    meat : 0.4,
    salad : 1.3,
    bacon : 0.7

}
class BurgerBuilder extends Component {
    state = {
        ingredient : {
            cheese : 0,
            meat : 0,
            salad : 0,
            bacon : 0
        },
        totalPrice : 4,
        purchasable : false,
        purchasing : false
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing : false})
    }
    continueClicked = () => {
        alert("let's Continue");
        this.purchaseCancelHandler()
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey]
        }).reduce((sum,el) => {
            return sum+el;
        },0)
        this.setState({purchasable:sum>0})
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type]
        const updateCount = oldCount + 1
        const updatedIngredient = {...this.state.ingredient}
        updatedIngredient[type] = updateCount
        const priceAddition = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice + priceAddition
        this.setState({ingredient:updatedIngredient,totalPrice:updatedPrice})
        this.updatePurchaseState(updatedIngredient)

    }
    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredient[type]
        if( oldCount === 0) 
            return
        const updateCount = oldCount - 1
        const updatedIngredient = {...this.state.ingredient}
        updatedIngredient[type] = updateCount
        const priceAddition = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice - priceAddition
        this.setState({ingredient:updatedIngredient,totalPrice:updatedPrice})
        this.updatePurchaseState(updatedIngredient)


    } 
    render() {
            return (
                <Aux>
                    <Modal show={this.state.purchasing} cancel={this.purchaseCancelHandler}>
                        <OrderSummary ingredients={this.state.ingredient} cancelClicked={this.purchaseCancelHandler}
                        continueClicked={this.continueClicked}
                        price={this.state.totalPrice}></OrderSummary>
                    </Modal>
                    <Burger ingredients = {this.state.ingredient}></Burger>
                    <BuildControls ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}/>
                </Aux>
            )
        }
}
export default BurgerBuilder