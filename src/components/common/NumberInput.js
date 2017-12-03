import React from 'react';
import PropTypes from 'prop-types'
import { OverlayTrigger, Popover } from 'react-bootstrap'

const NumberInput = ({ name, label, onChange, placeholder, value, error }) => {
    let wrapperClass = 'col-lg-3 col-md-4 col-sm-6 form-group';
    if (error && error.length > 0) {
        wrapperClass += ' has-error';
    }

   const popoverHoverFocus = (
      <Popover title="Error">{error}</Popover>
   );

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
             <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={error ? popoverHoverFocus : null}>
                <input type="text"
                    name={name}
                    onChange={onChange}
                    className="form-control"
                    value={value}
                    placeholder={placeholder} />
             </OverlayTrigger>
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
