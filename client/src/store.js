import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from 'redux-logger'
import {data as users} from './utils/data'
const initialState = [
  users[{
    "id":1,"name":"Hort Andrin","email":"handrin0@sciencedirect.com","location":"86775 Garrison Way","projects":"Mr. Deeds Goes to Town","website":"234.67.191.111/20","type_id":2
  }]
]

const middleware = [thunk,logger];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;