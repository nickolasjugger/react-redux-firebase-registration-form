import registrationReducer from './registrationReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    registration: registrationReducer
});

export default rootReducer;