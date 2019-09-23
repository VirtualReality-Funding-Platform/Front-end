import React from 'react';
import { Link,  } from 'react-router-dom';
import { connect } from 'react-redux';


const Landing = () => {
  
  
  
  
  
  return (
      <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>VR Funding Connect</h1>
          <p className='lead'>
            Create a entrepreneur profile, create a project and get found by investers.
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>

  )}
export default connect()(Landing);