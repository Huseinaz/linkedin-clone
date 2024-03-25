import React from 'react'
import profile from '../../Assets/profile.jpg';

const AddPost = () => {
  return (
    <div className="add_post-box">
      <div className="add_post_profile">
          <img src={profile} alt="profile" />
        </div>
        <div className="add_post">
          <input type="text" placeholder="Start a post" />
        </div>
    </div>
  )
}

export default AddPost