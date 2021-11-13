import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Menu.module.css'

const Menu = () => {
  const [isShow, setIsShow] = useState(false)
  const showMenu = () => {
    setIsShow(!isShow)
  }

  return (
    <>
      {/* Menu desktop view*/}
      <ul className={styles.maxUl}>
        <Link href="/" ><li>Home</li></Link>
        <Link href="/shop" ><li>Shops</li></Link>
        <Link href="/" ><li>Offers</li></Link>
        <Link href="/" ><li>FAQ</li></Link>
        <Link href="/" ><li>Contact</li></Link>
        <Link href="/profile" ><li>Profile</li></Link>
        <Link href="/signin" ><li>Signin</li></Link>
        <Link href="/signup" ><li>Signup</li></Link>
        <Link href="/signin" ><li className={styles.join}>Join</li></Link>
        <div onClick={showMenu} className={styles.hamburger}>
          {isShow ? <CloseIcon /> : <MenuIcon />}
        </div>
      </ul>
      {/* Menu mobile view*/}
      {
        isShow &&
        <ul className={styles.minUl}>
          <Link href="/" ><li>Home</li></Link>
          <Link href="/shop" ><li>Shops</li></Link>
          <Link href="/" ><li>Offers</li></Link>
          <Link href="/" ><li>FAQ</li></Link>
          <Link href="/" ><li>Contact</li></Link>
          <Link href="/profile" ><li>Profile</li></Link>
          <Link href="/signin" ><li>Signin</li></Link>
          <Link href="/signup" ><li>Signup</li></Link>
        </ul>
      }
    </>
  )
}

export default Menu;
