import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { connect } from 'react-redux';
import { setCurrentDate } from '../../../AC/index';

import 'react-datepicker/dist/react-datepicker.css';

const inlindeDatePicker =  (props: any) => <DatePicker
    inline
    selected={props.currentDate}
    onChange={handleChange(props)}
/>

function handleChange(props:any) {
    return (day: any) => {
        props.setCurrentDate(day);
        console.log(day);
    }
}

export default connect((state: any) => ({
    currentDate: state.currentDate
}),{setCurrentDate})(inlindeDatePicker);