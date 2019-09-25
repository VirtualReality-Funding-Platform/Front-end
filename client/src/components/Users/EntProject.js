import React from 'react';
import PropTypes from 'prop-types';


const EntProject = ({
  project: {   description }
}) => (
  <div>
    <h3 className="text-dark">{project.name}</h3>
  
    
  
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

EntProject.propTypes = {
  project: PropTypes.object.isRequired
};

export default EntProject;