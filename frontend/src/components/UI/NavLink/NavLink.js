import React from 'react';
import classes from './NavLink.module.css';

const Link = (props) => (
    <p onClick={props.onClick} className={classes.Link}>{props.linkText}</p>
);

export default Link;