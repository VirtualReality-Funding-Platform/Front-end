

import React from 'react';
import PropTypes from 'prop-types';
const EntTop = ({
    profile: {
      
      id,
      email,
      projects,
      location,
      website,
      user: { name, avatar }
    }
  }) => {
    return (
      <div className='profile-top bg-primary p-2'>
        <img className='round-img my-1' src={avatar} alt={id} />
        <h1 className='large'>{name}</h1>
        <p className='lead'>
         {email}
        </p>
        <p>{location && <span>{location}</span>}</p>
        <div className='icons my-1'>
          {website && (
            <a href={website} target='_blank' rel='noopener noreferrer'>
              <i className='fas fa-globe fa-2x' />
            </a>
          )}
          {projects}
          
   
            
          )}
        </div>
      </div>
    );
  };
  
  EntTop.propTypes = {
    profile: PropTypes.object.isRequired
  };
  export default EntTop