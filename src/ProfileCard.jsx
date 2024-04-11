import React from 'react';
import './ProfileCard.css';
import profilepic from './1.jpeg'

const ProfileCard = () => {
  return (
    <div className="main">
    <div className="profile-card">
      <div className="profile-image-section">
        <img src={profilepic} alt="Profile" className="profile-image" />
      </div>
    </div>
      <div className="profile-info-section">
        <h1 className="name">ALI SAMI <span className='span'>sami</span></h1>
        <p className="tagline">CYBERSECURITY EXPERT & WEB DEVELOPMENT INNOVATOR</p>
      </div>
      </div>
  );
};

export default ProfileCard;
