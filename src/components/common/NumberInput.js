import React from 'react';
import PropTypes from 'prop-types'

const NumberInput = ({ name, label, onChange, placeholder, value, error }) => {
    let wrapperClass = 'col-lg-3 col-md-4 col-sm-6 form-group';
    if (error && error.length > 0) {
        wrapperClass += ' has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input type="text"
                    name={name}
                    onChange={onChange}
                    className="form-control"
                    value={value}
                    placeholder={placeholder} />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

NumberInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.number,
    error: PropTypes.string
};

export default NumberInput;
