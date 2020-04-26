import React from 'react'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../../assets/11.1 shopping-bag.svg.svg'
import './cart-icon.styles.scss'

const CartIcon=({toggleCartHidden})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
     <ShoppingIcon className='shopping-icon'></ShoppingIcon>
     <span className='item-count'>1</span>
    </div>
)

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);