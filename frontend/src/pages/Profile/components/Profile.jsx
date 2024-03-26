import React from 'react'
import profile from '../../Assets/profile.jpg';

const Profile = () => {
  return (
    <div className="user-profile">
      <img src={profile} className="user-profile__picture" alt='' />
      <div className="user-profile__info">
        <p className="user-profile__name">hussein abou zeinab</p>
        <p className="user-profile__title">student</p>
      </div>
    </div>
  )
}

export default Profile