import React from 'react';
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker';
import '../../styles/react-datepicker.css';
import moment from 'moment';

const DateTimeInput = ({ name, label, onChange, placeholder, value, error }) => {
    let wrapperClass = 'col-lg-3 col-md-4 col-sm-6 form-group';
    if (error && error.length > 0) {
        wrapperClass += ' has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <DatePicker className='form-control'
                    name={name}
                    dateFormat="DD/MM/YYYY"
                    selected={moment(value)}
                    onChange={
                        (e) => { onChange({ target: { name: name, value: e._d.toISOString() } }); }
                    } />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

DateTimeInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default DateTimeInput;
