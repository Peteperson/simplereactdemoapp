import React from 'react';
import PropTypes from 'prop-types'
import { OverlayTrigger, Popover } from 'react-bootstrap'

const TextAreaInput = ({ name, label, large, onChange, placeholder, value, error }) => {
   let wrapperClass = '';
   if (large)
      wrapperClass = 'col-lg-6 col-md-8 col-sm-12 form-group';
   else
      wrapperClass = 'col-lg-3 col-md-4 col-sm-6 form-group';
   if (error && error.length > 0) {
      wrapperClass += ' has-error';
   }

   const popoverHoverFocus = (
      <Popover id='popid' title="Error">{error}</Popover>
   );

   return (
      <div className={wrapperClass}>
         <label htmlFor={name}>{label}</label>
         <div className="field">
            <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
               <textarea rows='4'
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

TextAreaInput.propTypes = {
   name: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   large: PropTypes.bool.isRequired,
   onChange: PropTypes.func.isRequired,
   placeholder: PropTypes.string,
   value: PropTypes.string,
   error: PropTypes.string
};

export default TextAreaInput;
