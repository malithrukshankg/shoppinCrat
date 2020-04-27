import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component'
import {ReactComponent as Logo} from '../../assets/4.2 crown.svg.svg'
import {auth} from '../../firebase/firebase.utils'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

const Header=({currentUser,hidden})=>(
   <div className='header'>
     <Link className='logo-contaainer' to="/">
      <Logo className='logo'></Logo>
     </Link>
     <div className='options'>
         <Link className='option' to='/shop'>
             Shop
         </Link>
         <Link className='option' to='/shop'>
            CONTACT
         </Link>
         {
           currentUser?<div className='option' onClick={()=>auth.signOut()}> SIGN OUT</div>:
           <Link className='option' to='/signin'>SIGN IN</Link>
         }
         <CartIcon/> 
     </div>
     {
       hidden?null: <CartDropDown/>
     }
    
   </div> 
)

const mapSateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})
export default connect(mapSateToProps)(Header);