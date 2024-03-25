import React from 'react'
import profile from '../../Assets/profile.jpg';

const Post = () => {
  return (
    <div className="post-box">
      <div className="post_profile">
          <img src={profile} alt="profile" />
        </div>
        <div className="post">
          <input type="text" placeholder="Start a post" />
        </div>
    </div>
  )
}

export default Post