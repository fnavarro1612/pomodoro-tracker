import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../store/actions/counter';
import Aux from '../../hoc/Aux/Aux'
import classes from './Counter.module.css';


const Counter = () => {

    const counter = useSelector(state => state.ctr.counter)
    const auth = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch();

    const didMountRef = useRef(false);

    useEffect(() => {
        const data = {
            count: counter
        }
        if (didMountRef.current) {
            if (auth && data.count !== 0) {
                dispatch(update(data.count));
            }
        }
        else {
            didMountRef.current = true;
        }

    });

    return (
        <Aux className={classes.Counter}>
            <div className={classes.Counter}>
                <h2 >Number of Pomodoros</h2>
                <h1 className={classes.Count}>{counter}</h1>
                <p className={classes.P}>Log in or Sign up to save your progress</p>
            </div>
        </Aux >
    )

}

export default Counter;