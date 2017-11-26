import React from 'react';
import PropTypes from 'prop-types'
import Toggle from 'react-toggle'
import '../../styles/toggle.css'

const ToggleInput = ({ name, label, onChange, placeholder, value, error }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <label>
                    <Toggle
                        checked={value}
                        onChange={
                            (e) => { 
                                value = !value;
                                onChange({ target: { name: name, value: value } }); 
                            }
                        }
                    />
                </label>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

ToggleInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.bool,
    error: PropTypes.string
};

export default ToggleInput;
