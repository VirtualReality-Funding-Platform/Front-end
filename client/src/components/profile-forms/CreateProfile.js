import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import Projects from "../projects/Projects";

const Createprofile = ({
  createProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history,
}) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    projects: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const {
    projects,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
  
  
  } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Redirect to='/dashboard' />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* Account Type</option>
            <option value='Entrepreneur'>Entrepreneur</option>
            <option value='Investor'>Investor</option>
 
          </select>
          <small className='form-text'>
          Please Select Account Type!
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Previous Project (If Applicable)'
            name='projects'
            value={projects}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Any projects you have worked on in the past.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Website'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Any projects or a portfolio hosted? Drop the link.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Skills'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Github Username'
            name='githubusername'
            value={githubusername}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
        Drop your github handle so others can see all your wonderful work,
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>This is you chance to sell yourself. Let an investor know why they should invest in you!</small>
        </div>

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};
Createprofile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  profile: state.profile,
});
export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile },
)(withRouter(Createprofile));