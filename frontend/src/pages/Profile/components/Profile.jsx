import React from 'react'
import profile from '../../Assets/profile.jpg';

const Profile = () => {
  return (
    <div className="user-profile">
      <img src={profile} className="user-profile__picture" alt='' />
      <div className="user-profile__info">
        <p className="user-profile__name">Your Name</p>
        <p className="user-profile__title">Your Title (optional)</p>
      </div>
      {/* Add dropdown menu component here (optional) */}
    </div>
  )
}

export default Profile