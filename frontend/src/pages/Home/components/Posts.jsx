import React from 'react'
import profile from '../../Assets/profile.jpg';
import sheet from '../../Assets/cheat_sheet.jpeg';
import { useNavigate } from 'react-router-dom';

const Posts = ({post}) => {

  const navigate = useNavigate();
  const { post_id, user_id, company_id, post_image, post_content, post_time } = post;

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
          {post_content}
        </div>
        <div className='image'>
          <img src={post_image} alt="profile" />
        </div>
      </div>
    </div>
  )
}

export default Posts