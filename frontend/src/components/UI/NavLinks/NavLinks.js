import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';
import Aux from '../../../hoc/Aux/Aux';
import classes from './NavLinks.module.css';
import { logout } from '../../../store/actions/auth';

const Links = () => {

    const auth = useSelector(state => state.auth.isAuthenticated);
    const userName = useSelector(state => state.auth.user);

    const dispatch = useDispatch();

    return (
        <Aux className={classes.Links}>
            {!auth
                ? <Fragment>
                    <Link className={classes.Links} to='/login'>
                        <NavLink linkText="Login"></NavLink>
                    </Link>
                    <Link className={classes.Links} to='/signup'>
                        <NavLink linkText="Sign up"></NavLink>
                    </Link>
                </Fragment>
                : <Fragment>
                    <NavLink linkText={`Let's get it, ${userName.user.name}!`}></NavLink>
                    <Link className={classes.Links} to='/tracker'>
                        <NavLink linkText="Tracker"></NavLink>
                    </Link>
                    <Link className={classes.Links} to='/'>
                        <NavLink onClick={() => dispatch(logout())} linkText="Logout"></NavLink>
                    </Link>
                </Fragment>
            }
        </Aux >
    )
}

export default Links;