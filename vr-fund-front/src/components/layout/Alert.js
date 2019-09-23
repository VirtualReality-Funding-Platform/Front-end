import React from 'react';
import PropTypes from 'prop-types';
import setAlert  from './../routes/Routes'
import {connect} from 'react-redux'
const Alert =  setAlert =>
  setAlert !== null &&
  setAlert.length > 0 &&
  setAlert.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.setAlert
});

export default connect(mapStateToProps)(Alert);