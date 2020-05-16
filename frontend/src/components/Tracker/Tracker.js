import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tracker } from '../../store/actions/tracker';
import NavBar from '../../containers/Layout/Navbar/Navbar';
import { reset } from '../../store/actions/counter';
import classes from './Tracker.module.css';


const Tracker = () => {

    const track_record = useSelector(state => state.tracker.tracker);

    const dispatch = useDispatch();

    function date_convert(date) {
        return new Date(date).toLocaleDateString()
    }

    let result = Object.values(track_record.reduce((a, { count, date }) => {
        if (!a[date_convert(date)])
            a[date_convert(date)] = Object.assign({}, { count, date });
        else
            a[date_convert(date)].count += count;
        return a;
    }, {}));

    const tracker_result = result.sort().reverse();


    useEffect(() => {
        dispatch(tracker());
        dispatch(reset());
    }, [dispatch]);


    return (
        <Fragment>
            <NavBar />
            <div className={classes.Global}>
                <h2>Tracker</h2>
                <table className="table" style={{ color: '#05386B' }}>
                    <thead className={classes.Header}>
                        <tr>
                            <th>Date</th>
                            <th>Pomodoro's count</th>
                            <th>Study Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tracker_result.map(record => (
                            <tr key={record.id}>
                                <td>{new Date(record.date).toLocaleDateString()}</td>
                                <td>{record.count}</td>
                                <td>{((record.count * 25) / 60).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default Tracker;