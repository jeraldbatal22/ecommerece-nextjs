import React from 'react'
import styles from './Signup.module.css'

const Signup = () => {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signup_card}>
        <h1 style={{ marginBottom: '30px', fontWeight: '600' }}><strong><strong>Online</strong><strong style={{ color: '#4285F4' }}>Shop</strong></strong></h1>
        <p style={{ marginBottom: '30px', color: 'gray' }}>By signing up, you agree to ourterms & policy</p>
        <div>
          <div className={styles.form_group}>
            <label>Name</label>
            <input type="text" placeholder="sample" />
          </div>
          <div className={styles.form_group}>
            <label>Email</label>
            <input type="text" placeholder="sample@gmail.com" />
          </div>
          <div className={styles.form_group}>
            <label>Addresss</label>
            <input type="text" placeholder="Brgy Street City" />
          </div>
          <div className={styles.form_group}>
            <label>Password</label>
            <input type="password" placeholder="**********" />
          </div>
          <div className={styles.form_group}>
            <label>Password Confirmation</label>
            <input type="password" placeholder="**********" />
          </div>
          <div className={styles.form_group}>
            <button onClick={() => {
              setisLogin(true)
              navigate('/checkout')
            }}>Register</button>
          </div>
          <hr></hr>
          <div className={styles.footer} style={{ marginTop: '30px' }}>
            <span>Already have an account?</span>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
