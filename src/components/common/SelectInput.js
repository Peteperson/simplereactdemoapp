import React from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select';
import { OverlayTrigger, Popover } from 'react-bootstrap'
import 'react-select/dist/react-select.css';

const SelectInput = ({ name, label, onChange, defaultOption, value, error, options }) => {
   const popoverHoverFocus = (
      <Popover id='popid' title="Error">{error}</Popover>
   );

   return (
      <div className='col-lg-3 col-md-4 col-sm-6'>
         <label htmlFor={name}>{label}</label>
         <div>
            {
               error ?
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
                     <Select
                        name={name}
                        onChange={
                           (e) => { onChange({ target: { name: name, value: (e ? e.value : null) } }); }
                        }
                        options={options}
                        value={value}
                        placeholder={defaultOption} />
                  </OverlayTrigger> :
                  <Select
                     name={name}
                     onChange={
                        (e) => { onChange({ target: { name: name, value: (e ? e.value : null) } }); }
                     }
                     options={options}
                     value={value}
                     placeholder={defaultOption} />
            }
         </div>
         <br />
      </div>
   );
};

SelectInput.propTypes = {
   name: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   defaultOption: PropTypes.string,
   value: PropTypes.number,
   error: PropTypes.string,
   options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
