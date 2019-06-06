import React from 'react';
import Modal from './../Modal';
import DatePicker from './DatePicker';
import './style.css';

export default class DatePickerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal overlyClassName={'date-picker date-picker-mask'}>
                <DatePicker/>
            </Modal>
        )
    }
}