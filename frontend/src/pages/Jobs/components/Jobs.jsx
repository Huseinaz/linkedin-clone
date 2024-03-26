import React from 'react'
import { useNavigate } from "react-router-dom";

import profile from '../../Assets/intalio_logo.jpeg';

const Jobs = ({job}) => {

  const navigate = useNavigate();
  const { company_id, title, description, post_date } = job;

  return (
    <div className="job-box">
      <div className='info'>
        <div className="job_profile">
          <img src={profile} alt="profile" />
        </div>
        <div>
          <div className='title'>
            {title}
          </div>
          <div className='company_name'>
            {company_id}
          </div>
          <div className='description'>
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs