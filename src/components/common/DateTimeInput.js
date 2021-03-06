import React from 'react';
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker';
import '../../styles/react-datepicker.css';
import { OverlayTrigger, Popover } from 'react-bootstrap'
import moment from 'moment';

const DateTimeInput = ({ name, label, onChange, placeholder, value, error }) => {
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
         {
            error ?
               <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocus}>
                  <div className="field">
                     <DatePicker className='form-control'
                        name={name}
                        dateFormat="DD/MM/YYYY"
                        selected={value ? moment(value) : null}
                        onChange={
                           (e) => { onChange({ target: { name: name, value: e._d.toISOString() } }); }
                        } />
                  </div>
               </OverlayTrigger> :
               <div className="field">
                  <DatePicker className='form-control'
                     name={name}
                     dateFormat="DD/MM/YYYY"
                     selected={value ? moment(value) : null}
                     onChange={
                        (e) => { onChange({ target: { name: name, value: e._d.toISOString() } }); }
                     } />
               </div>
         }
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
