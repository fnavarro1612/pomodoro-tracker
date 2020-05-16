import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../../containers/Layout/Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/actions/auth';
import { update, reset } from '../../store/actions/counter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './Login.module.css';

const Login = () => {

    const authenticated = useSelector(state => state.auth.isAuthenticated);
    const counter = useSelector(state => state.ctr.counter)

    const customId = 'login-success';

    const dispatch = useDispatch();

    const [form, setState] = useState({
        email: "",
        password: ""
    });

    const onSubmit = e => {
        e.preventDefault();

        const [email, password] = [form.email, form.password]

        const data = {
            email: email,
            password: password
        }

        dispatch(login(data.email.toLowerCase(), data.password));

    };

    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        })
    };


    if (authenticated) {
        const count_data = {
            count: counter
        };

        dispatch(update(count_data.count));
        dispatch(reset());
        toast.success("Welcome Back! Any progress has been saved to the tracker!", {
            toastId: customId
        });
        return <Redirect to="/" />;

    }


    const [email, password] = [form.email, form.password];

    return (
        <Fragment>
            <div className={classes.Global}>
                <NavBar />
                <div className="col-md-6 m-auto">
                    <div className="card card-body mt-5" style={{ backgroundColor: '#379683', color: '#EDF5E1' }}>
                        <h2 className="text-center">Login</h2>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    onChange={updateField}
                                    value={email}
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
                                <button type="submit" className={classes.Button}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;