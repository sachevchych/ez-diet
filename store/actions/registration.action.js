import axios from 'axios'
import {REGISTRATION_SUCCESS} from "./actionTypes";

export function registration(name, email, password) {
    return async dispatch => {
        let response = await axios
            .post('/api/auth/registration', {name, email, password})
            .then(response => response.data)
            .catch(error => error.response.data)
    }

}

function registrationSuccess() {
    return {
        type: REGISTRATION_SUCCESS,


    }
}