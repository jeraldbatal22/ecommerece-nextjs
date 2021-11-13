import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <strong>
        <strong className={styles.pick}>Online</strong>
        <strong className={styles.bazaar}>Shop</strong>
      </strong>
    </div>
  )
}

export default Logo;
