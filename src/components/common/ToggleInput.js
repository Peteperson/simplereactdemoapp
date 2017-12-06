import React from 'react';
import PropTypes from 'prop-types'
import Toggle from 'react-toggle'
import '../../styles/toggle.css'
import { OverlayTrigger, Popover } from 'react-bootstrap'

const ToggleInput = ({ name, label, onChange, placeholder, value, error }) => {
   let wrapperClass = 'col-lg-3 col-md-4 col-sm-6 form-group';
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
            {
               error ? 
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
                     <label>
                        <Toggle checked={value} onChange={(e) => { value = !value; onChange({ target: { name: name, value: value } }); }} />
                     </label>
                  </OverlayTrigger> :
                  <label>
                     <Toggle checked={value} onChange={(e) => { value = !value; onChange({ target: { name: name, value: value } }); }} />
                  </label>
            }
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
