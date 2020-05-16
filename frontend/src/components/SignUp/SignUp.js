import React, { Fragment, useState } from 'react';
import NavBar from '../../containers/Layout/Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../../store/actions/auth';
import { Redirect } from 'react-router-dom';
import { update, reset } from '../../store/actions/counter';
import classes from './SignUp.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const dispatch = useDispatch();
    const authenticated = useSelector(state => state.auth.isAuthenticated);
    const counter = useSelector(state => state.ctr.counter);

    const customId = 'signup-success';

    const [form, setState] = useState({
        email: "",
        name: "",
        password: "",
        verifyPassword: ""
    });

    const onSubmit = e => {
        e.preventDefault();

        const [email, name, password, verifyPassword] = [form.email, form.name, form.password, form.verifyPassword];

        const customIdVerify = 'unverified-password';

        if (password !== verifyPassword) {
            toast.error("Passwords must match", {
                toastId: customIdVerify
            });
        } else {
            const newUser = {
                email: email.toLowerCase(),
                name: name,
                password: password
            };
            dispatch(signUp(newUser));

        }
    };


    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    if (authenticated) {
        const count_data = {
            count: counter
        };

        dispatch(update(count_data.count));
        dispatch(reset());
        toast.success("Welcome! Any progress has been saved to the tracker!", {
            toastId: customId
        });
        return <Redirect to="/" />;

    }

    const [email, name, password, verifyPassword] = [form.email, form.name, form.password, form.verifyPassword];

    return (
        <Fragment>
            <div className={classes.Global}>
                <NavBar />
                <div className="col-md-6 m-auto">
                    <div className="card card-body mt-5" style={{ backgroundColor: '#379683', color: '#EDF5E1' }}>
                        <h2 className="text-center">Sign Up</h2>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={updateField}
                                    value={email}
                                />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={updateField}
                                    value={name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    onChange={updateField}
                                    value={password}
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="verifyPassword"
                                    onChange={updateField}
                                    value={verifyPassword}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className={classes.Button}>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignUp;

