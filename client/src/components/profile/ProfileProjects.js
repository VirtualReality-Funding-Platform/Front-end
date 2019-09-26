import React from 'react';
import PropTypes from 'prop-types';


const ProfileProject = ({
  project: { name,  description }
}) => (
  <div>
    <h3 className="text-dark">{name}</h3>
  
    
  
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileProject.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProfileProject;