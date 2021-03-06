import React from 'react';
import PropTypes from 'prop-types'
import TextInput from '../common/TextInput';
import TextAreaInput from '../common/TextAreaInput';
import NumberInput from '../common/NumberInput';
import DateTimeInput from '../common/DateTimeInput';
import { returnSmthIfNull, convertToBool } from '../../utility/helper';
import SelectInput from '../common/SelectInput';
import ToggleInput from '../common/ToggleInput';

const AutoForm = ({ title, mainObject, schemaProps, onChange, onSave, saving, errors }) => {
   let ctrls = [];
   if (Object.keys(mainObject).length>0) {
      console.log(mainObject);
      schemaProps.forEach(function (prop) {
         if (mainObject.hasOwnProperty(prop.name)) {
            ctrls.push(prop);
         } else {
            console.log("Problem with property: " + prop.name);
         }
      });
   }
   return (
      <form>
         <h1>{title}</h1>
         <div className="row">
            {schemaProps.map((item, i) => {
               switch (item.type.toLowerCase()) {
                  case "string":
                     return <TextInput key={i} name={item.name} large={item.large} label={item.title}
                        value={returnSmthIfNull(mainObject[item.name], '')} onChange={onChange}
                        error={errors[item.name]} />
                  case "textarea":
                     return <TextAreaInput key={i} name={item.name} large={item.large} label={item.title}
                        value={returnSmthIfNull(mainObject[item.name], '')} onChange={onChange}
                        error={errors[item.name]} />
                  case "number":
                     return <NumberInput key={i} name={item.name} label={item.title} 
                              value={returnSmthIfNull(mainObject[item.name], '')} onChange={onChange} 
                              error={errors[item.name]} />
                  case "date":
                     return <DateTimeInput key={i} name={item.name} label={item.title} 
                              value={mainObject[item.name]} onChange={onChange} error={errors[item.name]} />
                  case "list":
                     return <SelectInput key={i} name={item.name} options={item.options} 
                              label={item.title} value={mainObject[item.name]} onChange={onChange} 
                              error={errors[item.name]} />
                  case "bool":
                     return <ToggleInput key={i} name={item.name} label={item.title} 
                              value={convertToBool(returnSmthIfNull(mainObject[item.name], 0))} 
                              onChange={onChange} error={errors[item.name]} />
                  default:
                     console.log("Invalid type in control '" + item.name + "'");
                     return null;
               }
            })}
         </div>
         <input type="submit" disabled={saving} value={saving ? 'Saving...' : 'Save'}
            className="btn btn-primary" onClick={onSave} />
      </form>
   );
};

AutoForm.propTypes = {
   title: PropTypes.string.isRequired,
   mainObject: PropTypes.object.isRequired,
   schemaProps: PropTypes.array.isRequired,
   onChange: PropTypes.func.isRequired,
   onSave: PropTypes.func.isRequired,
   saving: PropTypes.bool,
   errors: PropTypes.object
};

export default AutoForm;
