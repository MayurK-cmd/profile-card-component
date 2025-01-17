import React from 'react';
import './index.css'; 
import backgroundpattern from './images/bg-pattern-card.svg';
import face from './images/image-victor.jpg'

const ProfileCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={backgroundpattern} alt="background pattern" />
      </div>
      <div className="card-content">
        <img src={face} alt="Victor Crest" />
        <p>Victor Crest<span> 26</span></p>
        <p>London</p>
      </div>
      <div className="card-footer">
        <div className="footer-item">
          <p className="status">80K</p>
          <small className="item-name">Followers</small>
        </div>
        <div className="footer-item">
          <p className="status">803K</p>
          <small className="item-name">Likes</small>
        </div>
        <div className="footer-item">
          <p className="status">1.4K</p>
          <p className="item-name">Photos</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
