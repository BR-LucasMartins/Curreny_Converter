import React from 'react'
import HeaderContainer from './style';

import logo from '../../assets/images/coins-svgrepo-com.svg'

const Header = () => {
  return (
    <HeaderContainer>
        <img className='logo' src={logo} alt="logo" />
        <span className=''> Currency Converter </span>
    </HeaderContainer>
  )
}

export default Header;