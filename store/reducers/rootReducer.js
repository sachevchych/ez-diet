import {combineReducers} from 'redux'
import registrationReducer from "./registration.reducer";

export default combineReducers({
    registration: registrationReducer
})