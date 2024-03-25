import React from 'react'
import profile from '../../Assets/profile.jpg';

const Posts = () => {
  return (
    <div className="post-box">
      <div className="post_profile">
        <img src={profile} alt="profile" />
      </div>
      <div className='info'>
        <div className='name'>
          hussein
        </div>
        <div className='position'>
          web dev
        </div>
      </div>
      <div className='description'>
        <div className="post">
          asdasdasdasdasdasds
        </div>
      </div>
    </div>
  )
}

export default Posts