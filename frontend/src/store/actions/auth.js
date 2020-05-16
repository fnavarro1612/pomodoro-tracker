import axios from 'axios';
import * as actionTypes from './actionTypes';
import { tokenConfig } from '../actions/tracker';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const login = (email, password) => dispatch => {

    const body = {
        email,
        password
    }

    const idLoginEmail = 'login-email-error';
    const idLoginPassword = 'login-email-error';
    const idLoginIncorrect = 'login-email-error';


    axios.post('https://fn-pomodoro-tracker.herokuapp.com/api/user/login/',
        body)
        .then(res => {
            dispatch({
                type: actionTypes.LOGIN,
                payload: res.data
            });
        })
        .catch(err => {
            let error = err.response.data;
            if (error.email) {
                toast.error(`Email: ${error.email.join()}`, {
                    toastId: idLoginEmail
                });
            };
            if (error.password) {
                toast.error(`Password: ${error.password.join()}`, {
                    toastId: idLoginPassword
                });
            };
            if (error.non_field_errors) {
                toast.error(`Password: ${error.non_field_errors.join()}`, {
                    toastId: idLoginIncorrect
                });
            };

        });
};

export const signUp = ({ email, name, password }) => dispatch => {

    const body = {
        email,
        name,
        password
    }

    const idSignupEmail = 'login-email-error';
    const idSignupPassword = 'login-email-error';
    const idSignupName = 'login-email-error';

    axios.post('https://fn-pomodoro-tracker.herokuapp.com/api/user/register/',
        body)
        .then(res => {
            dispatch({
                type: actionTypes.SIGNUP,
                payload: res.data
            });
        })
        .catch(err => {
            let error = err.response.data;
            if (error.email) {
                toast.error(`Email: ${error.email.join()}`, {
                    toastId: idSignupEmail
                });
            };
            if (error.name) {
                toast.error(`Name: ${error.name.join()}`, {
                    toastId: idSignupPassword
                });
            };
            if (error.password) {
                toast.error(`Password: ${error.password.join()}`, {
                    toastId: idSignupName
                });
            };

        })
};

export const logout = () => (dispatch, getState) => {

    const customId = 'logout-success';

    axios.post('https://fn-pomodoro-tracker.herokuapp.com/api/user/logout/',
        null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: actionTypes.LOGOUT
            });
            toast.success("You have successfully logged out, see you later!", {
                toastId: customId
            });
        })
        .catch(err => {
            toast.error(`Logout: ${err.join()}`);
        })
};