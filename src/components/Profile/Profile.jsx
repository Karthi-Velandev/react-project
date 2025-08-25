
import React from 'react';
import './Profile.css';
import Photo from './212224230115.png';
function Profile({ 
  name = "Karthikeyan D", 
  title = "Hello Everyone!", 
}) { 
  return (
    <div className="profile-card">
      <img 
        src={Photo} 
        alt={`${name}'s avatar`}
        className="profile-avatar"
      />
      {/* The h2 and p tags now display the dynamic data from props */}
      <h2 className="profile-name">{name}</h2>
      <p className="profile-title">{title}</p>
    </div>
  );
}

export default Profile;