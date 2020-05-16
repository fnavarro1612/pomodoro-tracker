import * as actionTypes from './actionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';

export const tracker = () => (dispatch, getState) => {

    axios.get('https://fn-pomodoro-tracker.herokuapp.com/api/date_counter/tracker/',
        tokenConfig(getState))
        .then(res => {
            dispatch({
                type: actionTypes.TRACKER,
                payload: res.data
            });
        })
        .catch(err => {
            toast.error('Error accessing tracker data.');
        }
        );
}

export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    return config;
};


