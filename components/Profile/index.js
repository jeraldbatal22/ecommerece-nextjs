import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.userProfileContainer}>
      <h1>User Profile</h1>
      <div className={styles.userprofile_card}>
        <div className={styles.user_top_body}>
          <div className="img">
            <img src="https://www.alltimelow.com/sites/g/files/g2000006681/f/Sample-image10-highres.jpg" alt="" width="350" height="400" />
            <div className={styles.upload_image}>
              <label htmlFor="upload_photo">+ Upload Profile Picture</label>
              <input type="file" name="photo" id="upload_photo" className={styles.upload_photo} />
            </div>
          </div>

          <div className="user">
            <h2>Profile Information</h2>
            <div className={styles.form_group}>
              <label>Email</label>
              <input type="text" defaultValue="sample@sample.com" />
            </div>
            <div className={styles.form_group} >
              <label>Username</label>
              <input type="text" defaultValue="sample" />
            </div>
            <div className={styles.form_group}>
              <label>Firstname</label>
              <input type="text" defaultValue="sample" />
            </div>
            <div className={styles.form_group}>
              <label>Lastname</label>
              <input type="text" defaultValue="sample" />
            </div>
            <div className={styles.form_group}>
              <label>Password</label>
              <input type="password" defaultValue="123456" />
            </div>
            <div className={styles.form_group}>
              <label>Confirm Password</label>
              <input type="password" defaultValue="123456" />
            </div>
            <div className={styles.form_button}>
              {/* <button className="back"><Link to="/"> BACK </Link></button> */}
              <button className={styles.update}> Update Profile</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile
