import React from 'react'
import profile from '../../Assets/profile.jpg';
import sheet from '../../Assets/cheat_sheet.jpeg';

const Posts = () => {
  return (
    <div className="post-box">
      <div className='info'>
        <div className="post_profile">
          <img src={profile} alt="profile" />
        </div>
        <div>
          <div className='name'>
            hussein abou zeinab
          </div>
          <div className='position'>
            web developer
          </div>
        </div>
      </div>
      <div className='description'>
        <div className="content">
          I've received many 6-figure job offers because I was the most prepared for the job interview, not because I was the "smartest".
        </div>
        <div className='image'>
          <img src={sheet} alt="profile" />
        </div>
      </div>
    </div>
  )
}

export default Posts