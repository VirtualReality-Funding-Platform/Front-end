import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

import { loginReducer } from './login-reducer';
import { registerReducer } from './register-reducer';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  alert,
  auth,
  profile,
  post
});

export default rootReducer;