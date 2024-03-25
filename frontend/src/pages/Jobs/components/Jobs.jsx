import React from 'react'
import profile from '../../Assets/intalio_logo.jpeg';

const Jobs = () => {
  return (
    <div className="job-box">
      <div className='info'>
        <div className="job_profile">
          <img src={profile} alt="profile" />
        </div>
        <div>
          <div className='title'>
            Software Engineer
          </div>
          <div className='company_name'>
            Intalio
          </div>
          <div className='description'>
            Description
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs