import React from 'react'
import styles from './Signin.module.css'
import GoogleIcon from '@mui/icons-material/Google';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const index = () => {
  return (
    <div className={styles.signInContainer}>
      <div className={styles.login_card}>
        <h1 style={{ marginBottom: '30px', fontWeight: '600' }}><strong><strong>Online</strong><strong style={{ color: '#4285F4' }}>Shop</strong></strong></h1>
        <p style={{ marginBottom: '30px', color: 'gray' }}>Login with your email & password</p>
        <div>
          <div className={styles.form_group}>
            <label>Email</label>
            <input type="text" placeholder="sample@gmail.com" />
          </div>
          <div className={styles.form_group}>
            <label>Password</label>
            <input type="password" placeholder="**********" />
          </div>
          <div className={styles.form_group}>
            <button
            // onClick={() => {
            //   toast.success(`Successfully login`)
            //   setisLogin(true)
            //   navigate('/')
            // }}
            >Login</button>
          </div>
          <hr></hr>
          <div className={styles.group_button}>
            <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><GoogleIcon style={{ marginRight: '10px' }} /> Login With Google</button>
            <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PhoneAndroidIcon style={{ marginRight: '10px' }} /> Login With Mobile Number</button>
          </div>
          <hr></hr>
          <div className={styles.footer} style={{ marginTop: '30px' }}>
            <span>Don't have any account?</span>
            <a href="/registration">Register</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
