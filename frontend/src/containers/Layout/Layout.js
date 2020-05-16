import React from 'react';
import classes from './Layout.module.css';
import NavBar from './Navbar/Navbar';
import Timer from '../../components/Timer/Timer';
import Counter from '../Counter/Counter';

const Layout = (props) => {

    return (
        < div className={classes.Global}>
            <NavBar />
            <Counter />
            <Timer />
        </div>
    )
}

export default Layout;