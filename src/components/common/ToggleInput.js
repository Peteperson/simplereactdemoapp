import React from 'react';
import PropTypes from 'prop-types'
import Toggle from 'react-toggle'
import '../../styles/toggle.css'
import { OverlayTrigger, Popover } from 'react-bootstrap'

const ToggleInput = ({ name, label, onChange, placeholder, value, error }) => {
   const popoverHoverFocus = (
      <Popover title="Error">{error}</Popover>
   );

   return (
      <div className="col-lg-3 col-md-4 col-sm-6 form-group">
         <label htmlFor={name}>{label}</label>
         <div className="field">
            <label>
               <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={error ? popoverHoverFocus : null}>
                  <Toggle
                     checked={value}
                     onChange={
                        (e) => {
                           value = !value;
                           onChange({ target: { name: name, value: value } });
                        }
                     }
                  />
               </OverlayTrigger>
            </label>
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
