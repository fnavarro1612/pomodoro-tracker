import React from 'react';
import classes from './Brand.module.css';
import { Link } from 'react-router-dom';

const Brand = () => (
    <Link className={classes.Brand} to='/'>
        <h3 className={classes.Brand}>Pomodoro Tracker</h3>
    </Link>
)

export default Brand;