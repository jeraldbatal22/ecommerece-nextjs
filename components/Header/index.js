import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import styles from './Header.module.css'

const Header = ({ carts, showCartModal }) => {
  return (
    <div className={styles.header}>
      <Logo />
      <Menu />
    </div>
  )
}


export default Header
