import * as actionTypes from './actionTypes';
import axios from 'axios';
import { tokenConfig } from '../actions/tracker';
import { toast } from 'react-toastify';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const reset = () => {
    return {
        type: actionTypes.RESET
    };
}


export const update = count => (dispatch, getState) => {
    const body = {
        count
    }

    axios.post('https://fn-pomodoro-tracker.herokuapp.com/api/date_counter/tracker/', body, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: actionTypes.UPDATE
            });
        })
        .catch(err => {
            toast.error('Error updating the tracker.');
        }
        );
}
