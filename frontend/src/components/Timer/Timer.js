/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import classes from './Timer.module.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlay, faPause, faBriefcase, faUndoAlt } from '@fortawesome/free-solid-svg-icons'

const Timer = (props) => {

    const [time, setTime] = useState(25 * 60 * 1000);
    const [workMode, setWorkMode] = useState(true);
    const [active, setActive] = useState(false);

    const dispatch = useDispatch();

    function toggleActive() {
        setActive(!active);
    }

    function displayTime() {
        return moment.utc(time).format('mm:ss');
    }

    function reset() {
        setActive(false);

        if (workMode) {
            setTime(25 * 60 * 1000);

        } else {
            setTime(5 * 60 * 1000);
        }
    }

    function increment() {
        dispatch({ type: "INCREMENT" })
    }

    function timeChangedHandler() {
        setWorkMode(!workMode);

        if (!workMode) {
            setTime(25 * 60 * 1000)
        } else {
            setTime(5 * 60 * 1000)
        }
    }

    function getMode() {
        if (workMode) {
            return <FontAwesomeIcon icon={faCoffee} size="2x" />
        } else {
            return <FontAwesomeIcon icon={faBriefcase} size="2x" />
        }
    }

    function handleFirstTab(e) {
        if (e.keyCode === 9) {
            document.body.classList.add('user-is-tabbing');
            window.removeEventListener('keydown', handleFirstTab);
        }
    }

    window.addEventListener('keydown', handleFirstTab);


    useEffect(() => {

        let interval = null;

        if (active && time !== 0) {
            interval = setInterval(() => {
                setTime(prevState => prevState - 1000);
            }, 1000);
        } else if (!active && time !== 0) {
            clearInterval(interval);
        } else if (time === 0 && workMode) {
            increment();
            timeChangedHandler();
            setActive(true);
        } else if (time === 0) {
            timeChangedHandler();
            setActive(true);
        }
        return () => clearInterval(interval);
    }, [active, time, increment, reset, timeChangedHandler, workMode]);

    const classArr = [classes.h1];

    if (!workMode) {
        classArr.push(classes.Pause);
    } else {
        classArr.push(classes.Go);
    }


    return (
        <div className={classes.Timer} >
            <h1 className={classArr.join(' ')}>{displayTime()}</h1>
            <button className={classes.Button} onClick={toggleActive}>{active ? <FontAwesomeIcon icon={faPause} size="2x" /> : <FontAwesomeIcon className={classes.Pulse} icon={faPlay} size="2x" />}</button>
            <button className={classes.Button} onClick={reset}><FontAwesomeIcon icon={faUndoAlt} size="2x" /></button>
            <button className={classes.Button} onClick={timeChangedHandler}>{getMode()}</button>
        </div>
    )
};

export default Timer;