import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/4.2 crown.svg.svg'

const Header=()=>(
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
     </div>
   </div> 
)

export default Header;